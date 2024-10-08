// app/layout.tsx
'use client'
import Loading from "@/components/Loading.logo.component";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
    }) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsAuthenticated(true);
        } else {
            router.push('/login');
        }
        setLoading(false);
    }, [router]);

    if (loading) {
        return <Loading /> // You can show a loading spinner or any other UI component here
    }

    if (!isAuthenticated) {
        return null;
    }
    return (
        <html lang="en">
            <body>
                <div className="flex h-screen w-full bg-gray-100">
                    <Sidebar />
                    <div className="flex flex-col w-full h-full ml-64">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
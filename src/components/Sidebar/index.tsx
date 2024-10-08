'use client';

import {
    LayoutDashboard,
    BarChart,
    MapPin,
    Camera,
    Settings,
    Box,
    Book
} from "lucide-react";
import Logo from "../../../public/Vector-logo.svg"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from "next/image";


const Sidebar = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("/dashboard");

    const handleTabClick = (path: string) => {
        setActiveTab(path);
        router.push(path);
    };

    const items = [
        { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
        { name: "Statistics", icon: BarChart, path: "/statistics" },
        { name: "Location", icon: MapPin, path: "/location" },
        { name: "Camera", icon: Camera, path: "/camera" },
        { name: "Settings", icon: Settings, path: "/settings" },
        { name: "Components", icon: Box, path: "/components" },
        { name: "Usage Manual", icon: Book, path: "/manual" },

    ];

    return (
        <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-20 p-6">
            <div className="space-y-8">
                <div className="flex items-center justify-start  gap-x-4">
                    <Image src='Vector-logo.svg' alt="" width={40} height={40} />
                    <h1 className="text-2xl font-muted">Eco-Watch</h1>
                </div>
                <nav className="space-y-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleTabClick(item.path)}
                            className={`flex items-center space-x-4 cursor-pointer p-3 rounded-lg transition-colors 
                                ${activeTab === item.path ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}
                            `}
                        >
                            <item.icon className={`w-6 h-6 ${activeTab === item.path ? "text-blue-600" : "text-gray-500"}`} />
                            <span className={`font-medium ${activeTab === item.path ? "font-bold" : ""}`}>{item.name}</span>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;

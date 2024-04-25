/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import SideNavbar from "@/components/SideNavbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecowatch",
  description: "ecowatch project"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full flex ",
          inter.className,
        
        )}
      >
        {/* sidebar */}
        {/* <p className="border">Sidebar</p> */}
   
        {/* main page */}
        <div className="w-full">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
          enableSystem
          themes={['light', 'dark']}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}

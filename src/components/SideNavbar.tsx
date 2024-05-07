
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";
import { LineChartIcon } from "lucide-react";

type Props = {};

import {
  Settings,
  
  ChevronRight,
  HomeIcon,
  LucideCamera,
 
  LocateIcon,
  User2Icon,
} from "lucide-react";


import { useWindowWidth } from "@react-hook/window-size";
import { Icons } from "./icons";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="w-auto border-r px-3  pt-24 sticky h-[30em] top-8 left-0">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <button
            onClick={toggleSidebar}
        
            className=" rounded-full p-2 bg-secondary  dark:bg-muted  text-mute"
          >
            <ChevronRight />
          </button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: Icons.home,
            variant: "ghost"
          },
          {
            title: "Users",
            href: "/users",
            icon: User2Icon,
            variant: "ghost"
          },
          {
            title: "Statistics",
            href: "/statistics",
            icon: LineChartIcon,
            variant: "ghost"
          },
          {
            title: "Location",
            href: "/location",
            icon: LocateIcon,
            variant: "ghost"
          },
          {
            title: "Camera",
            href: "/camera",
            icon: LucideCamera,
            variant: "ghost"
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost"
          }
        ]}
      />
    </div>
  );
}

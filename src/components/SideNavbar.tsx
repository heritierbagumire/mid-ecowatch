
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  
  ChevronRight,
  HomeIcon,
  LucideCamera,
 
  LocateIcon,
  User2Icon,
  ScatterChartIcon,
  LineChartIcon,
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 m-2  pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: HomeIcon,
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

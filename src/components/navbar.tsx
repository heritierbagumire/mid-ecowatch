import React from "react";
import PageTitle from "./PageTitle";
import { Search } from "./ui/search";
import { ThemeToggle } from "./theme-toggle";
import { UserNav } from "./ui/user-nav";
import { CommandMenu } from "./search-menu";
import Notification from "./Notification";

interface navBarProps {
  title: string | any;
}

const Navbar = ({ title }: navBarProps) => {
  return (
      <div className="container mx-auto fixed bg-background top-0 p-3 max-w-[85%] z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <PageTitle
              className="text-xs md:text-sm lg:text-lg"
              title={title}
            />
          </div>
          <div className="flex items-center justify-center">
            <CommandMenu />
          </div>
          <div className="flex items-center space-x-3 justify-center">
            {/* <ThemeToggle /> */}
          <UserNav />
          <Notification />
          </div>
        </div>
      </div>
  );
};

export default Navbar;

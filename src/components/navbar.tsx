import React from "react";
import PageTitle from "./PageTitle";
import { Search } from "./ui/search";
import { ThemeToggle } from "./theme-toggle";
import { UserNav } from "./ui/user-nav";
import { CommandMenu } from "./search-menu";

interface navBarProps {
  title: string;
}

const Navbar = ({ title }: navBarProps) => {
  return (
      <div className="container mx-auto fixed bg-background top-0 p-2 ">
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
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
      </div>
  );
};

export default Navbar;

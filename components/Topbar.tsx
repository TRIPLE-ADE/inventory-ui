"use client";

import React from "react";
import { BellIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Topbar = () => {
  const pathname = usePathname();

  const getTitle = (path: string) => {
    if (path === "/overview") return "Dashboard";
    const formattedPath = path.slice(1).replace("-", " ");

    return formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
  };

  const title = getTitle(pathname);

  return (
    <header className="flex justify-between items-center p-4 bg-white sticky top-0 z-30">
      {/* Left Section - Title */}
      <h1 className="text-3xl font-semibold text-primary">{title}</h1>

      {/* Middle Section - Search Input */}
      <div className="flex items-center w-full max-w-md mx-auto">
        <Input className="rounded-full bg-gray-100" placeholder="Search here..." type="text" />
      </div>

      {/* Right Section - Notification and Profile */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="relative p-2 rounded-lg bg-[#fef6ff]">
          <BellIcon className="text-[#FFB343]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#9E0000] rounded-full" />
        </div>

        {/* Profile Avatar */}
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="Tesleem's Profile" src="/profile.jpg" />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-blue-900">Tesleem</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;

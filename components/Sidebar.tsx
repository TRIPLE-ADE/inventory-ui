"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  PieChart,
  Users,
  User,
  BriefcaseBusinessIcon,
  LineChart,
  Settings,
  LogOut,
  LayoutDashboardIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/overview", label: "Dashboard", icon: PieChart },
    { href: "/users", label: "Users", icon: User },
    { href: "/management", label: "Management", icon: Users },
    { href: "/inventory", label: "Inventory", icon: BriefcaseBusinessIcon },
    { href: "/sales-report", label: "Sales Report", icon: LineChart },
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/sign-out", label: "Sign Out", icon: LogOut },
  ];

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-indigo-600 text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <LayoutDashboardIcon />
      </button>
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen overflow-y-auto no-scrollbar transition-all w-64 bg-white text-secondary lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-5">
          <h1 className="text-2xl font-bold">LOGO</h1>
          <nav className="mt-16 space-y-4">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  className={cn(
                    "flex items-center px-6 py-4 rounded-lg",
                    pathname === link.href ? "bg-primary text-white" : "",
                  )}
                  href={link.href}
                >
                  <Icon className="mr-3" />
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

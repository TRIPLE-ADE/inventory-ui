"use client";

import { useState } from "react";
import { Users, UserPlus, Heart, UserX } from "lucide-react";

import { Button } from "@/components/ui/button";

import StatsCard from "../StatsCard";

import { UserFilters } from "./user-filters";
import { UsersTable } from "./users-table";
import { User } from "./types";

const initialUsers: User[] = [
  {
    id: "1",
    name: "Nnaemeka Uzo",
    email: "nnaemekauzo@outlook.com",
    phone: "08192839532",
    location: "118 Ogbotobo Road, Southern Ijaw, Bayelsa",
    status: "approved",
  },
  {
    id: "2",
    name: "Tesleem Ola",
    email: "tesleemola@icloud.com",
    phone: "07052233470",
    location: "151 Okposi-Uburu Road, Okposi, Ebonyi",
    status: "disabled",
  },
  {
    id: "3",
    name: "Aisha Zakariya",
    email: "aishazakariya@zoho.com",
    phone: "07052233870",
    location: "107 Itele Road, Ota, Ogun",
    status: "error",
  },
  // ... more users with similar data structure
];

export function UsersManagement() {
  const [users] = useState<User[]>(initialUsers);

  const stats = {
    total: 2500,
    new: 300,
    active: 2000,
    inactive: 2500,
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Users Management</h1>
        <Button className="bg-[#00008B] hover:bg-blue-800">
          <UserPlus className="mr-2 h-4 w-4" />
          Add New Users
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          containerClassName="bg-[#FFEDED]"
          icon={<Users className="text-white w-4 h-4" />}
          iconContainerClassName="bg-[#FF6B6B]"
          layout="horizontal"
          title="Total Users"
          value={stats.total}
        />
        <StatsCard
          containerClassName="bg-[#FFF4DE]"
          icon={<UserPlus className="text-white w-4 h-4" />}
          iconContainerClassName="bg-[#FF947A]"
          layout="horizontal"
          title="New Users"
          value={stats.new}
        />
        <StatsCard
          containerClassName="bg-[#DCFCE7]"
          icon={<Heart className="text-white w-4 h-4" />}
          iconContainerClassName="bg-[#3CD856]"
          layout="horizontal"
          title="Active Users"
          value={stats.active}
        />
        <StatsCard
          containerClassName="bg-[#F3E8FF]"
          icon={<UserX className="text-white w-4 h-4" />}
          iconContainerClassName="bg-[#BF83FF]"
          layout="horizontal"
          title="Non-active Users"
          value={stats.inactive}
        />
      </div>

      <UserFilters />
      <UsersTable users={users} />
    </div>
  );
}

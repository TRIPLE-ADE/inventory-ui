"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input, Button } from "@/components/ui";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={cn(
        "min-h-screen h-screen flex justify-between w-full items-center",
        darkMode ? "bg-gradient-to-r from-blue-700 to-indigo-900" : "bg-white",
      )}
    >
      <section className="flex basis-1/2 justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h2 className="text-3xl font-semibold text-primary">Sign In</h2>
          <form className="space-y-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-primary" htmlFor="email">
                Email*
              </label>
              <Input
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                placeholder="mail@example.com"
                type="email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary" htmlFor="password">
                Password*
              </label>
              <Input
                required
                className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
                placeholder="Min. 8 characters"
                type="password"
              />
            </div>

            <div className="flex justify-end items-center">
              <Link className="text-sm text-primary hover:underline" href="/forgot-password">
                Forgot password?
              </Link>
            </div>

            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </form>
        </div>
      </section>
      <section className="basis-1/2 rounded-es-[100px] w-full h-full bg-gradient-to-b from-[#000080] to-[#00001A]">
        <button className="absolute top-4 right-4" onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? <Sun size={32} /> : <Moon size={32} />}
        </button>
      </section>
    </main>
  );
}

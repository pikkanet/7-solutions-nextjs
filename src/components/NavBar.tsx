"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ToggleThemeButton";

const Navbar = () => {
  const pathname = usePathname();
  const linkClasses = (path: string) =>
    pathname === path
      ? "min-w-[90px] text-sm font-black lg:text-base py-2 px-2 md:px-4 md:hover:bg-white hover:text-black rounded-full transition duration-300"
      : "min-w-[90px] text-sm lg:text-base py-2 px-2 md:px-4 hover:bg-white hover:text-black rounded-full transition duration-300";
  return (
    <nav className="bg-[var(--navbar-background)] p-4">
      <div className="flex justify-between items-center">
        <p className="text-sm lg:text-xl font-bold transition duration-300">
          Pikkanet <span className="hidden md:inline">Chokwattanapornchai</span>
        </p>
        <ul className="flex space-x-4">
          <li>
            <Link href="/todo">
              <p className={linkClasses("/todo")}>
                <span className="hidden md:inline">Auto Delete </span>Todo List
              </p>
            </Link>
          </li>
          <li>
            <Link href="/api">
              <p className={linkClasses("/api")}>
                <span className="hidden md:inline">Create data from </span>API
              </p>
            </Link>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

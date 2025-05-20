"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "References", path: "/references" },
  { name: "Contact", path: "/contact" },
  { name: "Social", path: "/social" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[95vw] max-w-3xl justify-center hidden md:flex">
        <nav
          className="backdrop-blur-xl bg-white/70 dark:bg-dark-card/70 shadow-xl rounded-full flex items-center px-2 py-1 gap-1 transition-all duration-300 border border-blue-100/60 dark:border-blue-900/60"
          style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const isHovered = hovered === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center
                  ${isActive ? "bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100 shadow-md" : "text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"}
                  ${isHovered && !isActive ? "bg-blue-100/70 dark:bg-blue-900/70" : ""}
                `}
                onMouseEnter={() => setHovered(item.path)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  boxShadow: isActive
                    ? "0 2px 12px 0 rgba(59, 130, 246, 0.10)"
                    : undefined,
                  transform: isActive || isHovered ? "scale(1.08)" : "scale(1)"
                }}
              >
                {item.name}
                {isActive && (
                  <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full shadow-lg animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>
      </nav>
      <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 flex md:hidden w-full justify-center">
        <button
          aria-label="Open menu"
          className="bg-white/80 dark:bg-dark-card/80 rounded-full shadow-xl p-3 border border-blue-100 dark:border-blue-900 flex items-center justify-center focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
        >
          <HiMenu className="text-3xl text-blue-700 dark:text-blue-400" />
        </button>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-transparent backdrop-blur-lg animate-fade-in overflow-hidden w-screen h-screen">
            <div className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl border border-blue-100 dark:border-blue-900 flex flex-col items-center gap-4 px-8 py-8 min-w-[70vw] max-w-xs">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`w-full text-center px-4 py-3 rounded-xl font-semibold text-lg transition-all duration-200
                    ${pathname === item.path ? "bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100" : "text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50"}
                  `}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                className="mt-2 text-blue-500 dark:text-blue-400 hover:underline text-sm"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

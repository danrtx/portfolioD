"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[95vw] max-w-3xl flex justify-center">
      <div
        className="backdrop-blur-xl bg-white/70 shadow-xl rounded-full flex items-center px-2 py-1 gap-1 transition-all duration-300 border border-blue-100/60"
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
                ${isActive ? "bg-blue-200 text-blue-900 shadow-md" : "text-gray-700 hover:text-blue-700"}
                ${isHovered && !isActive ? "bg-blue-100/70" : ""}
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
                <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 
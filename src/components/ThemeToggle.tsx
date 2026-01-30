"use client";

import { useTheme } from "./ThemeProvider";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 bg-gray-800 dark:bg-gray-700 border border-gray-700 dark:border-gray-600 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <IconSun className="w-6 h-6 text-yellow-400" />
      ) : (
        <IconMoon className="w-6 h-6 text-blue-400" />
      )}
    </button>
  );
}

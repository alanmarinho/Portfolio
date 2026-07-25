import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useData, type TTheme } from "@context/data";

const THEME_DARK: TTheme = "dark";
const THEME_LIGHT: TTheme = "light";

export function ThemeToggle() {
  const { theme, setTheme } = useData();

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    const isDark =
      saved === THEME_DARK ||
      (!saved &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);
    setTheme(isDark ? THEME_DARK : THEME_LIGHT);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";

    setTheme(next);

    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-accent transition"
      title="Trocar tema"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
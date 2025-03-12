import React, { useState, useEffect } from "react";
enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const ThemeToggle: React.FC = () => {
  const getInitialTheme = () => {
    if (typeof window === "undefined") {
      return Theme.LIGHT;
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }

    const systemPrefersDark = window.matchMedia(
      `(prefers-color-scheme: ${Theme.DARK})`
    ).matches;
    return systemPrefersDark ? Theme.DARK : Theme.DARK;
  };
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };
  return (
    <button
      onClick={toggleTheme}
      className="p-2 w-20 md:w-40 text-xs lg:text-sm bg-[var(--gray-200)] rounded-full shadow-md hover:bg-[var(--hover-color)]"
    >
      <div>
        <span className="hidden md:inline">Switch to </span>
        {theme === Theme.LIGHT ? "Dark Mode" : "Light Mode"}
      </div>
    </button>
  );
};

export default ThemeToggle;

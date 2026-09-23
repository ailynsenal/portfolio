import { useState } from "react";

type Theme = "light" | "dark";

// The initial theme is set by the inline script in index.html before first paint.
const readTheme = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(readTheme);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;

    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (e.g. private mode): the theme still applies for this visit.
    }
    setTheme(next);
  };

  return { theme, toggleTheme };
};

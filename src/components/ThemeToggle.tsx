import Moon from "../assets/svgs/Moon";
import Sun from "../assets/svgs/Sun";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full p-2 transition hover:bg-muted/40 hover:text-secondary"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;

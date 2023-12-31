import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { Themes } from "../app/themes";
import { selectTheme } from "../features/config/configSlice";

export const useTheme = () => {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    if (theme === Themes.System.id) {
      const darkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    } else {
      document.body.setAttribute("data-theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    if (theme !== Themes.System.id) return;
    const handleChange = (e: MediaQueryListEvent) => {
      document.body.setAttribute("data-theme", e.matches ? "dark" : "light");
    };

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkScheme.addEventListener("change", handleChange);
    return () => {
      prefersDarkScheme.removeEventListener("change", handleChange);
    };
  }, [theme]);
};

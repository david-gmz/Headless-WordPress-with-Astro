// Theme store to manage theme state across components
export type Theme = "light" | "dark";

// Create a custom event for theme changes
export const themeChangeEvent = new CustomEvent("theme-change");

// Get initial theme
export const getInitialTheme = (): Theme => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme") as Theme;
    }
    if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }
    return "light";
};

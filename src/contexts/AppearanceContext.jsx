import { useContext } from "react";
import { createContext } from "react";

const AppearanceContext = createContext();

function AppearanceProvider({ children }) {
  const darkTheme = {
    name: "dark",
    background: "#000",
    primary: "#e7e9ea",
    secondary: "#71767b",
  };

  const dimTheme = {
    name: "dim",
    background: "#15202b",
    primary: "#f7f9f9",
    secondary: "#8b98a5",
  };

  const lightTheme = {
    name: "light",
    background: "#fff",
    primary: "#0f1419",
    tertiary: "#536471",
  };

  return <AppearanceContext.Provider>{children}</AppearanceContext.Provider>;
}

export function useAppearance() {
  const context = useContext(AppearanceContext);
  return context;
}

export default AppearanceProvider;

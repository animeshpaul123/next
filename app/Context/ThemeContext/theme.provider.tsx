import { FC, useEffect, useMemo } from "react";
import { ThemeProvider } from "./theme.context";
import { useLocalStorage } from "usehooks-ts";
import {
  THEME_LOCAL_STORAGE_KEY,
  THEME_NAMES,
} from "@/app/utils/constants/theme.constant";

interface IThemeDataProvider {
  children: React.ReactNode;
}

const ThemeDataProvider: FC<IThemeDataProvider> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage(
    THEME_LOCAL_STORAGE_KEY,
    THEME_NAMES.DARK
  );

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  const cxValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  );
  return <ThemeProvider value={cxValue}>{children}</ThemeProvider>;
};

export default ThemeDataProvider;

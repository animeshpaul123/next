"use client";
import ThemeDataProvider from "./Context/ThemeContext/theme.provider";

type TProviders = {
  children: React.ReactNode;
};
export default function Providers({ children }: TProviders) {
  return <ThemeDataProvider>{children}</ThemeDataProvider>;
}

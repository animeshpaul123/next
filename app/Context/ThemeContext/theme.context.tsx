import { noop } from "@/app/utils/helpers/generic.helper";
import { createContext } from "react";

interface IThemeContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  setTheme: noop,
});

export const { Provider: ThemeProvider, Consumer: ThemeConsumer } =
  ThemeContext;

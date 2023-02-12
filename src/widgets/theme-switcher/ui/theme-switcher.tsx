import cs from "classnames";
import cls from "./theme-switcher.module.scss";
import { Theme, useTheme } from "app/providers/theme";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/button/button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={cs(cls.ThemeSwitcher, className)}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

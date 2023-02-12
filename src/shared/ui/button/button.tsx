import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";
import cs from "classnames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button className={cs(cls.Button, cls[theme], className)} {...otherProps}>
      {children}
    </button>
  );
};

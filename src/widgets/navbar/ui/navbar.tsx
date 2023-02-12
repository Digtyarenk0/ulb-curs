import React from "react";
import cls from "./navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/app-link/app-link";
import { RoutePath } from "shared/config/route-config";
import { ThemeSwitcher } from "widgets/theme-switcher";
import classNames from "classnames";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, className)}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={RoutePath.about}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

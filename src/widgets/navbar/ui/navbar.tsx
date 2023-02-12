import React from "react";
import cls from "./navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/app-link";
import { RoutePath } from "shared/config/route-config";

export const Navbar = () => {
  return (
    <div className={cls.navbar}>
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

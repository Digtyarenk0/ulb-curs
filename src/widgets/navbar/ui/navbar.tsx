import React from "react";
import cls from "./navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/app-link/app-link";
import { RoutePath } from "shared/config/route-config";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation("translation");
  return (
    <div className={classNames(cls.navbar, className)}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.mainLink}
        >
          {t("Main Page")}
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={RoutePath.about}>
          {t("About us")}
        </AppLink>
      </div>
    </div>
  );
};

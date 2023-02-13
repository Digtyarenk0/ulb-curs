import classNames from "classnames";
import cls from "./Sidebar.module.scss";
import React, { useState } from "react";
import { ThemeSwitcher } from "widgets/theme-switcher";
import { LangSwitcher } from "widgets/lang-switcher/lang-switcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed(!collapsed);

  return (
    <div
      className={classNames(
        cls.sidebar,
        { [cls.collapsed]: collapsed },
        className
      )}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

import classNames from "classnames";
import cls from "./Sidebar.module.scss";
import React, { useState } from "react";
import { ThemeSwitcher } from "widgets/theme-switcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

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
      </div>
    </div>
  );
};

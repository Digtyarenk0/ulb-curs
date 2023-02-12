import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "../pages/about/index.async";
import { MainPageAsync } from "../pages/main/index.async";
import "./styles/index.scss";
import { useTheme } from "app/providers/theme";
import { Navbar } from "widgets/navbar";
import { AppRouter } from "app/providers/router";
import { ThemeSwitcher } from "widgets/theme-switcher";
import classNames from "classnames";
import { Sidebar } from "widgets/sidebar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

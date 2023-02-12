import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "../pages/about/index.async";
import { MainPageAsync } from "../pages/main/index.async";
import "./styles/index.scss";
import cs from "classnames";
import { useTheme } from "app/providers/theme";
import { Navbar } from "widgets/navbar";
import { AppRouter } from "app/providers/router";
import { ThemeSwitcher } from "widgets/theme-switcher";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cs("app", theme)}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

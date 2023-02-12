import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "../pages/about/index.async";
import { MainPageAsync } from "../pages/main/index.async";
import "./styles/index.scss";
import cs from "classnames";
import { useTheme } from "./providers/theme/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cs("app", theme)}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

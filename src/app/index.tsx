import React, { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "app/providers/theme";
import { Navbar } from "widgets/navbar";
import { AppRouter } from "app/providers/router";
import classNames from "classnames";
import { Sidebar } from "widgets/sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

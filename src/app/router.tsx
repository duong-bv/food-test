import { ReactNode, useMemo } from "react";

import GlobalLayout from "@/components/Layout";
import NotFoundPage from "@/pages/NotFoundPage";

import React from "react";

import HomePage from "@/pages/HomePage/Home";
import Record from "@/pages/RecordPage";
import ColumnPage from "@/pages/ColumnPage";

export interface Route {
  path: string;
  name?: string;
  icon?: ReactNode;
  element?: ReactNode;
  children?: Route[];
  redirect?: string;
  isSub?: boolean;
}
const routerConfig = () => {
  const routes: Route[] = useMemo(() => {
    return [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/record",
        element: <Record />,
      },
      {
        path: "/notification",
      },
      {
        path: "/columnPage",
        element: <ColumnPage />,
      },
      ]
  }, []);

  const arrRoutes = [
    {
      path: "/",
      element: <GlobalLayout />,
      children: routes,
    },
    {
      path: "*",
      name: "404",
      element: <NotFoundPage />,
    },
  ];

  return {
    routes,
    arrRoutes,
  };
};

export default routerConfig;

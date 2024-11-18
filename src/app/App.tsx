// src/app/routes.tsx
import React, { Suspense, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import routerConfig from "./router";
import Loading from "@/pages/CommonPage/Loading";
import { notification } from "antd";

const AppRoutes: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const { arrRoutes } = routerConfig();

  return (
    <Suspense fallback={<Loading></Loading>}>
      {contextHolder}
      <RouterProvider router={createBrowserRouter(arrRoutes)} />
    </Suspense>
  );
};

export default AppRoutes;

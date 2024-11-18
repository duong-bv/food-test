// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./app/App";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            bodyBg: "#FFFFFF",
            footerBg: "#FFFFFF",
            headerBg: "#FFFFFF",
            siderBg: "#3D5CEF",
            headerHeight: undefined,
          },
        },
      }}
    >
        <App />
    </ConfigProvider>
);

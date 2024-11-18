import React, { useEffect } from "react";
import { Layout } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HeaderPage from "./Header";
import { IconUp } from "@/assets/icons/icons";
import Footer from "./Footer";

const { Content } = Layout;

const GlobalLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname === "/") {
      navigate(`/home`);
    }
  }, [location?.pathname]);

  const onSCrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout className="min-h-screen" hasSider>
      <Layout className="flex flex-col overflow-auto items-center bg-[#eaf0f6]">
        <Content className="flex-grow main-content w-[1280px]">
          <HeaderPage />
          <div onClick={() => onSCrollTop()}>
            <IconUp className="fixed top-[50%] right-10 cursor-pointer" />
          </div>
          <Outlet />
          <Footer />
        </Content>
      </Layout>
    </Layout>
  );
};

export default GlobalLayout;

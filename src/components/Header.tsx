import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { IconLogo, IconMedal, IconNote, IconNoti } from "@/assets/icons/icons";

interface MenuItem {
  id: number;
  text: string;
  icon: React.ReactNode;
  path: string;
}

const HeaderPage: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<number>(1);
  const [visible, setVisible] = useState(false);

  const menus: MenuItem[] = [
    { id: 1, text: "自分の記録", icon: <IconNote />, path: "/home" },
    { id: 2, text: "チャレンジ", icon: <IconMedal />, path: "/record" },
    { id: 3, text: "お知らせ", icon: <IconNoti />, path: "/notification" },
  ];

  useEffect(() => {
    const currentPath = window.location.pathname;
    const matchedMenu = menus.find((menu) => menu.path === currentPath);
    if (matchedMenu) {
      setActive(matchedMenu.id);
    }
  }, [menus]);

  const handleNavigation = (menuItem: MenuItem) => {
    if (menuItem.id !== 3) { // Only navigate if not the 'notification' menu
      setActive(menuItem.id);
      navigate(menuItem.path);
    }
  };

  const handleMenuClick = ({ key }: { key: string }) => {
    const id = Number(key);
    setActive(id);
    if (id === 1) {
      navigate("/home");
    } else if (id === 5) {
      navigate("/columnPage");
    }
  };

  const dropdownMenu = (
    <Menu onClick={handleMenuClick} className="w-[280px] z-[9999]">
      {[1, 2, 3, 4, 5, 6].map((id) => (
        <Menu.Item
          key={id}
          className={`h-[52px] bg-[#777777] custom-menu-item ${active === id && "isActive"}`}
        >
          {id === 1 && "自分の記録"}
          {id === 2 && "体重グラフ"}
          {id === 3 && "目標"}
          {id === 4 && "選択中のコース"}
          {id === 5 && "コラム一覧"}
          {id === 6 && "設定"}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Header className="flex justify-between h-[64px] items-center bg-[#414141] shadow px-4">
      <div className="flex flex-row lg:gap-20 gap-4 lg:justify-center justify-between items-center w-full">
        <div className="flex flex-row lg:gap-8 items-center gap-2 justify-between w-full px-20">
          <IconLogo className="lg:w-[109px] lg:h-[40px] w-[64px] h-[44px]" />

          <div className="flex flex-row gap-14 items-center">
            <div className="flex flex-row gap-8 items-center">
              {menus.map((menuItem) => (
                <div
                  key={menuItem.id}
                  className="flex flex-row gap-2 items-center cursor-pointer"
                  onClick={() => handleNavigation(menuItem)}
                >
                  <div className="relative">
                    {menuItem.icon}
                    {menuItem.id === 3 && (
                      <div className="absolute w-4 h-[16px] rounded-full bg-[#EA6C00] text-[10px] text-white flex justify-center items-center -top-[1px] -right-[4px]">
                        1
                      </div>
                    )}
                  </div>
                  <span
                    className={`text-white text-[16px] font-[300] line-clamp-1 break-words ${
                      active === menuItem.id && "!text-[#FF963C]"
                    }`}
                  >
                    {menuItem.text}
                  </span>
                </div>
              ))}
            </div>

            <Dropdown
              overlay={dropdownMenu}
              trigger={["click"]}
              visible={visible}
              onVisibleChange={setVisible}
              autoAdjustOverflow
              placement="bottomRight"
              className="cursor-pointer"
            >
              {visible ? (
                <CloseOutlined className="text-xl text-[#FF963C] transition duration-300 ease-in-out" />
              ) : (
                <MenuOutlined className="text-xl text-[#FF963C] transition duration-300 ease-in-out" />
              )}
            </Dropdown>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderPage;

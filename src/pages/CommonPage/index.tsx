import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Empty, MenuProps } from "antd";
import React from "react";

interface CommonDropdownProps {
    items: MenuProps['items'];
    className?: string;
    iconClassName?: string;
    menuItem?: any;
}

export const CustomEmpty = () => (
    <Empty
        description={<span className="ant-empty-description">没有数据</span>}
    />
);

export const DropDownCommon: React.FC<CommonDropdownProps> = (props) => {
    const { items, menuItem } = props
    return (
        <Dropdown menu={{ items }} autoAdjustOverflow placement="bottomRight" arrow className="cursor-pointer">
            {menuItem ? menuItem : <MenuOutlined className="text-xl text-[#FF963C] transition duration-300 ease-in-out"/>}
        </Dropdown>
    )
};


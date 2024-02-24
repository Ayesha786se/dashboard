// import React, { children } from "react";
import avatar from "../img/avatar.jpg";
import { Avatar, Menu, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  BarChartOutlined,
  ExclamationCircleOutlined,
  HomeOutlined,
  SnippetsOutlined,
  TransactionOutlined,
  UserAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import UiLogo from "./UiLogo";
import { NavLink } from "react-router-dom";
const { Text } = Typography;

function UiSideBar() {
  return (
    <div>
      <Sider
        style={{
          borderRight: "1px solid #EAE4E4",
          height: "811px",
        }}
        theme="light"
      >
        <UiLogo />
        <div className="sideBar_Avatar">
          <Avatar src={avatar} size={75} icon={<UserOutlined />} />
          <br />
          <div className="profile_time">
            <ExclamationCircleOutlined />
            28h
          </div>
          <br />
          <div>
            <Text strong style={{ color: "purple" }}>
              Sara Hidaya
            </Text>
            <br />
            <Text type="secondary">sarah@gmail.com</Text>
          </div>
        </div>

        <Menu
          className="sideBar"
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: <NavLink to="/dashboard">DashBoard</NavLink>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <NavLink to="/advertising">Advertising</NavLink>,
            },
            {
              key: "3",
              icon: <SnippetsOutlined />,
              label: <NavLink to="/usercontact">User Contact</NavLink>,
            },
            {
              key: "4",
              label: (
                <Typography.Text strong style={{ textAlign: "left" }}>
                  Others
                </Typography.Text>
              ),
              children: [
                {
                  icon: <TransactionOutlined />,
                  label: "Payment",
                },
                {
                  icon: <UserAddOutlined />,
                  label: "Sales",
                },
              ],
            },
            {
              key: "5",
              icon: <BarChartOutlined />,
              label: "Customers",
            },
            {
              key: "6",
              icon: <TransactionOutlined />,
              label: "User Contact",
            },
          ]}
        ></Menu>
      </Sider>
    </div>
  );
}

export default UiSideBar;

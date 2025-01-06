import { Layout, Menu, MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Children, createElement } from "react";
import { Outlet } from "react-router";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Dashboard",
  },
  {
    key: "2",
    label: "Profile",
  },
  {
    key: "3",
    label: "Usermanagement",
    children: [
      {
        key: "3a",
        label: "Create Admin",
      },
      {
        key: "3b",
        label: "Create Studemt",
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "while",
            textAlign: "center",
            backgroundColor: "green",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white" }}>Ph Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1>Main Page</h1>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

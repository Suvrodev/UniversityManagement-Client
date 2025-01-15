import { Button, Layout } from "antd";

const { Content, Footer } = Layout;

// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { Children, createElement } from "react";
// import { NavLink, Outlet } from "react-router";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import Header from "../../Header/Header";

const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ height: "100vh" }}>
      {/* <Sider
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
          items={sidebarItems}
        />
      </Sider> */}
      <Sidebar />
      <Layout>
        <Header />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1>Main Page</h1>
            <Button onClick={() => navigate("/login")}>Login Page</Button>
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

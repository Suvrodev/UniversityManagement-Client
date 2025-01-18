import { Layout } from "antd";

const { Content } = Layout;

import { Outlet } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import Header from "../../Header/Header";

const MainLayout = () => {
  return (
    <Layout className="h-auto">
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
        <Content>
          <div className="px-2 py-4 h-[100vh]">
            <Outlet />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center", backgroundColor: "green" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
    // <div>
    //   <Outlet />
    // </div>
  );
};

export default MainLayout;

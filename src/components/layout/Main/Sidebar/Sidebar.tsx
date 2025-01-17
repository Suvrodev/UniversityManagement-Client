import { Layout, Menu } from "antd";

import { useGetSideBarItems } from "../../../../utils/slideBarItem";

const { Sider } = Layout;

const Sidebar = () => {
  return (
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
        items={useGetSideBarItems()}
      />
    </Sider>
  );
};

export default Sidebar;

import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      <h1>This is Admin Navbar</h1>
      <Outlet />
    </div>
  );
};

export default AdminLayout;

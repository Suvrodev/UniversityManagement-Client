import { Button } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    console.log("Logout Button");
    dispatch(logout());
  };
  return (
    <div>
      <Button onClick={handleLogout}>Loogut</Button>
    </div>
  );
};

export default Header;

import { Button } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router";

const Header = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    console.log("Logout Button");
    dispatch(logout());
  };

  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={handleLogout}>Loogut</Button>
      <Button onClick={() => navigate("/login")}>Login Page</Button>
    </div>
  );
};

export default Header;

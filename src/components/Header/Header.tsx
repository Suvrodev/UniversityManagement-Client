import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router";
import { useGetMeQuery } from "../../redux/features/auth/authApi";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const whoIsMe = useGetMeQuery(undefined)?.data?.data?.name?.firstName || "";
  // console.log("Who is me: ", whoIsMe);
  // const {} = useAppSelector((state) => state.departments);
  // console.log("User in Header: ", user);
  // console.log("Department in Header: ", departments);
  const handleLogout = () => {
    console.log("Logout Button");
    dispatch(logout());
  };

  const navigate = useNavigate();
  return (
    <div className="bg-blue-500 py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">Ph University</h1>
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <p className="text-xl text-white font-bold">
                Hi, <span className="italic text-orange-500">{whoIsMe}</span>
              </p>
              <Button onClick={handleLogout}>Loogut</Button>
            </div>
          ) : (
            <Button
              style={{ backgroundColor: "red" }}
              onClick={() => navigate("/login")}
            >
              Login Page
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

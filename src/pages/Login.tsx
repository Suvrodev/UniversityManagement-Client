import { FormEvent } from "react";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import Header from "../components/Header/Header";
// import { useNavigate } from "react-router";
import { toast } from "sonner";
import { TUser } from "../utils/Type/Type";
import { Button } from "antd";
import { Link } from "react-router";

const Login = () => {
  // const [login,{data,isError,isLoading}] = useLoginMutation();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // console.log("isError", isError);
  // console.log("isLoading: ", isLoading);
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;
    const id: string = Form.userId.value;
    const password: string = Form.password.value;

    const loginInfo = { id, password };
    // console.log("Login Form: ", loginInfo);
    try {
      const toastId = toast.loading("Logining", { duration: 1000 });
      const res = await login(loginInfo).unwrap();
      console.log("Response: ", res);
      const user = verifyToken(res?.data?.accessToken) as TUser;
      console.log("User: ", user);
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Login Successfully", { id: toastId, duration: 1000 });
      // navigate(`/`);
    } catch {
      toast.error("Something Went wrong");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <Header />
      <form onSubmit={handleLogin}>
        <div>
          <h1>User id:</h1>
          <input
            type="text"
            name="userId"
            id=""
            placeholder="User id"
            className=""
            defaultValue="0001"
          />
        </div>
        <div>
          <h1>Password</h1>
          <input
            type="text"
            name="password"
            id=""
            placeholder="User id"
            className=""
            defaultValue={"admin12345"}
          />
        </div>
        <button>Login</button>
      </form>

      <Link to={"/admin/academic-semester"}>
        <Button>admin/academic-semester</Button>
      </Link>
    </div>
  );
};

export default Login;

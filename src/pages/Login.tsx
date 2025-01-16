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
  const toastUniqueId = "123";
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
      const toastId = toast.loading("Logining", {
        id: toastUniqueId,
        duration: 1000,
      });
      const res = await login(loginInfo).unwrap();
      console.log("Response: ", res);
      const user = verifyToken(res?.data?.accessToken) as TUser;
      console.log("User: ", user);
      dispatch(setUser({ user, token: res.data.accessToken }));
      // toast.success("Login Successfully", { id: toastId, duration: 1000 });
      toast.success("Login Successfully", {
        id: toastUniqueId,
        duration: 1000,
      });
      // navigate(`/`);
    } catch {
      toast.error("Something Went wrong", { id: toastUniqueId });
    }
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-white text-center my-4 ">
        Login Page
      </h1>
      <Header />
      <div className="border w-1/4 mx-auto p-4 rounded-xl ">
        <form onSubmit={handleLogin} className=" ">
          <div className="flex flex-col items-center justify-center p-0">
            <h1 className="text-xl text-white font-bold my-2">User id</h1>
            <input
              type="text"
              name="userId"
              id=""
              placeholder="User id"
              className="bg-white px-4 py-2 rounded-md text-black font-bold w-full"
              defaultValue="0001"
            />
          </div>
          <div>
            <h1 className="text-xl text-white font-bold my-2">Password</h1>
            <input
              type="text"
              name="password"
              id=""
              placeholder="User id"
              className="bg-white px-4 py-2 rounded-md text-black font-bold w-full"
              defaultValue={"admin12345"}
            />
          </div>
          <button className="btn btn-primary my-4 text-white w-full">
            Login
          </button>
        </form>
      </div>

      <Link to={"/admin/academic-semester"}>
        <Button>admin/academic-semester</Button>
      </Link>
    </div>
  );
};

export default Login;

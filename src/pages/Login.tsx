import { FormEvent } from "react";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  // const [login,{data,isError,isLoading}] = useLoginMutation();
  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();
  // console.log("isError", isError);
  // console.log("isLoading: ", isLoading);
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;
    const id: string = Form.userId.value;
    const password: string = Form.password.value;

    const loginInfo = { id, password };
    // console.log("Login Form: ", loginInfo);
    const res = await login(loginInfo).unwrap();
    console.log("Response: ", res);
    const user = verifyToken(res?.data?.accessToken);
    console.log("User: ", user);
    dispatch(setUser({ user, token: res.data.accessToken }));
  };
  return (
    <div>
      <h1>Login Page</h1>
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
    </div>
  );
};

export default Login;

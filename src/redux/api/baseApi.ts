import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";
import { sonarId } from "../../utils/sonarId";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  console.log("In Custom Base Query: ", result);

  if (result?.error?.status === 404 || result?.error?.status === 403) {
    toast.error(result?.error?.data?.message);
  }

  if (result?.error?.status === 500) {
    toast.error(result?.error?.data?.message, { id: sonarId });
  }
  if (result?.error?.status === 400) {
    toast.error(result?.error?.data?.message, { id: sonarId });
  }

  if (result.error?.status === 401) {
    console.log("Sending Refresh Token");
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      const newAccessToken = data?.data?.accessToken;
      console.log("New Access Token: ", newAccessToken);

      api.dispatch(
        setUser({
          user,
          token: newAccessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

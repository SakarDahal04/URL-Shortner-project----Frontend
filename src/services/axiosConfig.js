import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs"


export const createAxiosInstance = (authTokens, setAuthTokens, setUser) => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  axiosInstance.interceptors.request.use(
    async (req) => {
      // No authTokens in local Storage, return request
      if (!authTokens) {
        return req;
      }

      // If authTokens available get access token
      const user = jwtDecode(authTokens.access);

      // Check for expiry date
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      // If not expired use the same authTokens from the local storage
      if (!isExpired) {
        req.headers.Authorization = `Bearer ${authTokens.access}`;
        return req;
      }

      // If expired use refresh token to get back access token again
      console.log("Access Token is Expired. Refreshing ..... ");

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/token/refresh/`,
          {
            refreshToken: authTokens.refresh,
          }
        );

        // After obtaining new access token set to the authTokens in local storage
        localStorage.setItem("authTokens", JSON.stringify(response.data));

        // set auth tokens in state
        setAuthTokens(response.data);

        // Decode the auth tokens
        setUser(jwtDecode(response.data.access)); // same as authTokens.access in AuthContextProvider

        // Request header again attaching new access token
        req.headers.Authorization = `Bearer ${response.data.access}`;

        // After modifying the request header return back the request
        return req;
      } catch (err) {
        console.log("Refresh Token expired. Logging out....");
        // logoutUser()

        return Promise.reject(err);
      }
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};

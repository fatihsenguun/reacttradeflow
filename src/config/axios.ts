
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

api.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem('accessToken')

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;

        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);


api.interceptors.response.use(
    (response: any) => response,
    async (error: any) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                if (!refreshToken) {

                    throw new Error("Refresh token cannot found");
                }//new access token request
                const response = await axios.post("http://localhost:8080/refreshToken", {
                    refreshToken: refreshToken
                });
                const accessToken = response.data.data.accessToken;
                const newRefreshToken = response.data.data.refreshToken;
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", newRefreshToken);

                // axios header update 
                api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                return api(originalRequest);
            } catch (refreshError) {


                console.error("Session error", refreshError);
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                window.location.href = '/login'

                return Promise.reject(refreshError);



            }


            return Promise.reject(error);


        }
    }
)
export default api;
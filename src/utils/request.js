import axios from "axios";
import { Message } from "element-ui";

// 创建axios实例
const service = axios.create({
  baseURL: "http://127.0.0.1:8888/", // api的base_url
  timeout: 200000, // 请求超时时间
  // withCredentials: true
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    // config.baseURL = "http://127.0.0.1:8888/"
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  (response) => {
    console.log("response", response);
    if (response.status == 200) {
      return response;
    }
  },
  (error) => {
    console.err("报错信息", error);
    if (error.message) {
      Message({
        message: error.message,
        type: "error",
        duration: 5 * 1000,
      });
    } else {
      console.err("网络问题", error);
      Message({
        message: "网络错误",
        type: "error",
        duration: 5 * 1000,
      });
    }

    return Promise.reject(error);
  }
);
export default service;

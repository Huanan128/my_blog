let env = "dev";

let baseURL = "";
if (env === "dev") {
  baseURL = "https://127.0.0.1:8888";
} else if (env === "prod") {
  baseURL = "https://127.0.0.1:8888";
} else {
  baseURL = "https://127.0.0.1:8888";
}
export { baseUrl };

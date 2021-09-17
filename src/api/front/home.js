import request from "@utils/request.js";
// 切记，这里的域名前的/一定要加,如果不写域名，即组件里有写baseURL，则不需要加/
const PUBLIC_API = "front/home";

/**
 * 分类列表
 */
export function getListApi(params) {
  return request({
    url: `/${PUBLIC_API}/tag/list`,
    method: "GET",
    params,
  });
}

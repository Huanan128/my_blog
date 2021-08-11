export function ajax(options) {
    // 存储的是默认值
    let defaults = {
      type: "get",
      url: "",
      data: {},
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      success: function () {},
      error: function () {},
    };
    // 使用options对象中的属性覆盖defaults对象的属性
    Object.assign(defaults, options);
    let xhr = new XMLHttpRequest();
    // 拼接请求参数的变量
    let params = "";
    // 循环用户传递寄来的对象格式参数
    for (let attr in defaults.data) {
      // 将参数转为字符串格式
      params += `${attr}=${defaults.data[attr]}&`;
    }
    // 将参数最后面的&截取掉
    // 将截取到的结果重新赋值给params变量
    params = params.substr(0, params.length - 1);
    // 如果请求的方式是get
    if (defaults.type == "get") {
      //   将拼接好的参数放到请求地址后面
      defaults.url = defaults.url + "?" + params;
    }
    xhr.open(defaults.type, defaults.url);
    // 如果请求的方式是post
    if (defaults.type == "post") {
      // 用户希望的向服务器传递的请求参数的类型
      let contentType = defaults.header["Content-Type"];
      // 设置请求参数格式的类型
      xhr.setRequestHeader("Content-Type", contentType);
      // 判断用户希望的请求格式的类型
      // 如果类型为json
      if (contentType == "application/json") {
        // 向服务器端传递json数据格式的参数
        xhr.send(JSON.stringify(defaults.data));
        // 向服务器传递普通类型的请求参数
      } else {
        xhr.send(params);
      }
    } else {
      xhr.send();
    }

    xhr.onload = function () {
      // 获取响应头中的数据
      let contentType = xhr.getResponseHeader("Content-Type");
      // 服务器端返回的数据
      let responseText = xhr.responseText;
      // 如果响应类型中包含application/json
      if (contentType.includes("application/json")) {
        responseText = JSON.parse(responseText);
      }
      // 当状态码等于200的时候
      if (xhr.status == 200) {
        // 请求成功，调用处理成功情况的函数
        defaults.success(responseText, xhr);
      } else {
        // 请求失败，调用处理失败情况的函数
        defaults.error(responseText, xhr);
      }
    };
  }
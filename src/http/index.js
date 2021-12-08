import axios from 'axios';

const http = axios.create();
http.defaults.baseURL = process.env.HOST_URL;

// 访问超时设置
http.defaults.timeout = 16000;

// 获取通用参数值
http.getParams = () => {
  return {};
};

// 判断用户是否已经登陆
http.isLogin = () => {
  let params = http.getParams();
  if (params) {
    return params.customer_id && params.token;
  }
  return false;
};

// 添加请求拦截器
http.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  let url = config.baseURL + config.url;
  if (config.method === 'post') {
    let combineData = {
      ...config.data,
      ...http.getParams()
    };
    let formdata = new FormData();
    for (let key in combineData) {
      formdata.append(key, combineData[key]);
    }
    config.data = formdata;
  } else if (config.method === 'get') {
    config.params = {
      ...config.params,
      ...http.getParams()
    };
  }
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(response => {
  // 对响应数据做点什么
  if (response.data && response.data.status) {
    if (response.data.status !== 1) {
      // 收到token错误，就直接退出了
      if (response.data.status === 5) {
        window.localStorage.clear();
      }
      // 响应码错误
      console.log(response);
      return Promise.reject(response.data);
    }
  }
  // 响应成功
  return response;
}, error => {
  // 对响应错误做点什么
  // 响应失败
  return Promise.reject({
    ...error,
    msg: error.message
  });
});

export default http;

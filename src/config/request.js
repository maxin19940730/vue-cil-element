
import axios from 'axios';

/**
 * 拼接字符串方法
 */
var urlEncode = function (param, key, encode) {
  if (param == null) return '';
  var paramStr = '';
  var t = typeof (param);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += urlEncode(param[i], k, encode);
    }
  }
  return paramStr;
};
//处理请求响应拦截
function setAxios(app) {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  // 请求拦截器
  axios.interceptors.request.use(function (config) {
    //可用于配置请求token等
    config.headers.token = 'wwwwwsdsdf'
    //添加请求的公共参数
    console.log('config', config)
    return config;

  }, function (error) {
    return Promise.reject(error);
  })

  // 响应拦截器
 axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    const msg = error.message;
    let message = ''
    if (msg.indexOf("timeout") > -1) {
      message = "网络超时，请重试！"
    } else {
      if (error && error.response) {
        switch (error.response.status) {
          case 400: message = '请求错误(400)'; break;
          case 401: message = '未授权，请重新登录(401)'; break;
          case 403: message = '拒绝访问(403)'; break;
          case 404: message = '请求出错(404)'; break;
          case 408: message = '请求超时(408)'; break;
          case 500: message = '服务器错误(500)'; break;
          case 501: message = '服务未实现(501)'; break;
          case 502: message = '网络错误(502)'; break;
          case 503: message = '服务不可用(503)'; break;
          case 504: message = '网络超时(504)'; break;
          case 505: message = 'HTTP版本不受支持(505)'; break;
          default: message = `连接出错(${error.response.status})!`;
        }
      } else {
        message = '连接服务器失败!'
      }
      app.$message(message);
    }
    return Promise.reject(message);
  })
}

// 封装axios的post请求
function fetch({ url, method, params }) {
  //处理请求响应拦截
  setAxios(this)
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      data: params
    }).then(response => {
      if (!response) {
        this.$message('返回错误！')
        reject('返回错误！')
      } else {
        resolve(response.data);
      }
    }).catch((err) => {
      reject(err)
    })

  })
}

export function $post(url, params) {
  return fetch.call(this, { url, method: 'post', params })
}

export function $get(url, params) {
  url = url + '?1=1' + urlEncode(params)
  return fetch.call(this, { url, method: 'get', params })
}

// 前端模拟数据请求
export function mockApi(api, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = {
        data: data,
        status: 200,
        statusText: "",
        headers: {
          pragma: "no-cache",
          "content-type": "application/json;charset=UTF-8",
          "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
          expires: "0",
        },
        config: {
          url: "//10.20.196.123:20902/api/cert/cert_sel",
          method: "post",
          data: '{"userId":1368,"pageIndex":0,"pageSize":10}',
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=utf-8",
          },
          baseURL: "//10.20.196.123:20902",
          transformRequest: [null],
          transformResponse: [null],
          timeout: 20000,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
        },
        request: {},
      };
      resolve(res);
    }, 300);
  });
}

export default {
  $post, $get, mockApi
}

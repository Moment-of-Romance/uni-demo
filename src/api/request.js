// request.js

const BASE_URL = 'https://api.example.com'; // 替换为你的 API 基础 URL

const request = (url, method, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${BASE_URL}${url}`,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/json',
        ...headers
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};

const get = (url, data, headers) => {
  return request(url, 'GET', data, headers);
};

const post = (url, data, headers) => {
  return request(url, 'POST', data, headers);
};

const put = (url, data, headers) => {
  return request(url, 'PUT', data, headers);
};

const del = (url, data, headers) => {
  return request(url, 'DELETE', data, headers);
};

export default {
  get,
  post,
  put,
  del
};
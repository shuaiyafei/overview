const axios = require('axios');

module.exports = function fetch(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {
        'Content-type': 'application/json'
      },
      timeout: 3000,
      baseURL: 'http://www.xxx.com/'
    });
    instance(config).then(res => {
      console.log(res);
      resolve(res);
    }).catch(err => {
      console.log(err);
      reject(err);
    });
  });
};
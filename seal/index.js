const fetch = require('./fetch');

function getData(url, type, data) {
  type = type ? type : 'post';
  fetch({
    url,
    method: type,
    data
  });
}

getData('api/getdata', '', {
  a: 1,
  b: 2
}).then(res => {
  console.log(res);
}, err => {
  console.log(err);
});
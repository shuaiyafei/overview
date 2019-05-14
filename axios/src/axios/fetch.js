import axios from 'axios';

export function fetch(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {
        'Content-type': 'application/json'
      },
      timeout: 3000,
      baseURL: 'https://some-domain.com/api/',
    });

    instance.get('/longRequest', {
      timeout: 5000
    });
    
    instance(config).then(res => {
      console.log(res);
      resolve(res);
    }).catch(err => {
      console.log(err);
      reject(err);
    });
  });
}

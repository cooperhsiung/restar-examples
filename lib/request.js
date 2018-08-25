/**
 * Created by Cooper on 2018/8/25.
 */
const request = require('request');

let url = 'http://localhost:3000';
// url = 'http://localhost:3000/test'

request(url, (err, res, body) => {
  console.log(body);
});

let i = 1000;

while (i--) {
  request(url, (err, res, body) => {
    console.log(body);
  });
}

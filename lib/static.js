/**
 * Created by Cooper on 2018/8/25.
 */
const path = require('path');
const Restar = require('restar');
const serveStatic = require('serve-static');
const app = new Restar();

app.use((req, res) => {
  return new Promise(function(resolve, reject) {
    serveStatic(path.join(__dirname, 'public'))(req, res, () => {
      return resolve(undefined);
    });
    setTimeout(resolve, 0, true);
  });
});

app.get('/test', () => 'hello');

app.listen(3000);

/**
 * Created by Cooper on 2018/8/25.
 */
const path = require('path');
const Restar = require('restar');
const serveStatic = require('serve-static');
const app = new Restar();

// since Restar is used for rest api, static usage is not recommended
app.use(
  (req, res) =>
    new Promise(resolve => {
      serveStatic(path.join(__dirname, 'public'))(req, res, () => resolve(undefined));
      setTimeout(resolve, 0, !undefined);
    })
);

app.get('/test', () => 'hello');

app.listen(3000);

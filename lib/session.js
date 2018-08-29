/**
 * Created by Cooper on 2018/08/29.
 */
const Restar = require('restar');
const app = new Restar();
const session = require('express-session');
const MemoryStore = require('express-session/session/memory');
const store = new MemoryStore();

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 },
    store
  })
);

app.get('/views', req => {
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }
  return req.session.views;
});

app.get('/test', () => 'hello');

app.listen(3000);

/**
 * Created by Cooper on 2018/08/29.
 */
const Restar = require('restar');
const app = new Restar();

/* custom returns should be contained in app.use(preHandlers) */
app.use('/test', (req, res, next) => {
  res.statusCode = 302;
  res.setHeader('Location', '/page');
  res.end();
});

app.get('/page', () => 'new page');

app.listen(3000);

/**
 * Created by Cooper on 2018/8/25.
 */
const Restar = require('restar');
let app = new Restar();

app.use((req, res) => {
  res.setHeader('X-Powered-By', 'Restar');
});

app.get('/test', () => ({ name: 'restar' }));

app.post('/test', ({ param: { name } }) => {
  return name || null;
});

app.get(
  '/sleep',
  async () => {
    await sleep();
  },
  () => 'sleep 1s'
);

function sleep(delay = 1000) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

app.listen(3000);

/**
 * Created by Cooper on 2018/08/29.
 */
const cors = require('cors');
const Restar = require('restar');
const app = new Restar();

// app.use(cors());
app.get('/test', cors(), () => 'hello');

app.listen(3000);

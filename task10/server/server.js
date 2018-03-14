import express from 'express';
import router from './routes';

const app = express();

app.use('/', router);
app.use(express.static('dist'));

app.listen(3020, () => {
  console.log('listening on 3020');
});
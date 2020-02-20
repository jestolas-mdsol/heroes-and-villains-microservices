import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const env = process.env.NODE_ENV || app.get('env');
const PORT = 3001;

app.use(express.json());
app.use('/heroes', routes);

app.listen(PORT, () => {
  console.log(`Heroes Microservice is running in **${env}** Mode on port ${PORT}`);
});

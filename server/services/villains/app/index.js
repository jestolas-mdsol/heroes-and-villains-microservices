import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const env = process.env.NODE_ENV || app.get('env');
const PORT = env === 'development' ? 3011 : 3012;

app.use(express.json());
app.use('/villains', routes);

app.listen(PORT, () => {
  console.log(`Villains Microservice is running in **${env}** Mode on port ${PORT}`);
});

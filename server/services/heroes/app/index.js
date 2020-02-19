import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const env = process.env.NODE_ENV || app.get('env');
const PORT = 3001; // env === 'development' ? 3002 : (process.env.PORT || 3000);
// const CLIENT_DIR = path.resolve('./build/client');
// const INDEX_PATH = path.join(CLIENT_DIR, 'index.html');

// const forceSsl = (req, res, next) => {
//   if (req.headers['x-forwarded-proto'] !== 'https') {
//     return res.redirect(`https://${req.hostname}${req.url}`);
//   }
//
//   return next();
// };
//
// if (env === 'production') {
//   app.use(forceSsl);
// }
//
// app.use(express.static(CLIENT_DIR));

// app.use('/', (req, res) => {
//   res.sendFile(INDEX_PATH);
// });

app.use(express.json());
app.use('/heroes', routes);

app.listen(PORT, () => {
  // console.log(`Environment: ${env}`);
  console.log(`Heroes Microservice is running on port ${PORT}`);
});

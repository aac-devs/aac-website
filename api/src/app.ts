import config from './lib/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createRoutes } from './lib/routes';

const app = express();
export const router = express.Router();

[cors(), morgan('dev'), express.json(), express.static('public'), router].forEach((fn) => {
  app.use(fn);
});

createRoutes();

app.listen(config.httpPort, () => {
  console.log(`Server listen on port ${config.httpPort}`);
});

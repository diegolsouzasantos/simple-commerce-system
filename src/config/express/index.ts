import express from 'express';
import * as routes from '../../routes';

const app = express();

Object.entries(routes).map(([key, value]) => {
  app.use(key, value);
});

export default app;

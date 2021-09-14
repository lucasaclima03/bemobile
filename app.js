import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import userRoutes from './src/routes/userRoutes';
// import tokenRoutes from './src/routes/tokenRoutes';
import clientRoutes from './src/routes/clientRoutes';
import salesRoutes from './src/routes/salesRouter';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users/', userRoutes);
    // this.app.use('/tokens/', tokenRoutes);
    this.app.use('/clients/', clientRoutes);
    this.app.use('/sales', salesRoutes);
  }
}

export default new App().app;

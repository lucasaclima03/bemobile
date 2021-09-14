import { Router } from 'express';
import salesController from '../controllers/SalesController';

const router = new Router();

router.post('/', salesController.store);

export default router;

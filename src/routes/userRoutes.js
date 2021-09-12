import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.signUp);

export default router;

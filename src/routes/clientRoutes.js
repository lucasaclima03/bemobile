import { Router } from 'express';
import clientController from '../controllers/ClientsController';

const router = new Router();

router.post('/', clientController.store);
router.get('/', clientController.index);
router.delete('/:id', clientController.delete);
router.put('/:id', clientController.update);

export default router;

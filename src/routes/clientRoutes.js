import { Router } from 'express';
import clientsController from '../controllers/ClientsController';

const router = new Router();

router.post('/', clientsController.store);
router.get('/', clientsController.index);
router.delete('/:id', clientsController.delete);
router.put('/:id', clientsController.update);
router.get('/:id', clientsController.show);

export default router;

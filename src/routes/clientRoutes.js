import { Router } from 'express';
import clientsController from '../controllers/ClientsController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, clientsController.store);
router.get('/', clientsController.index);
router.delete('/:id', clientsController.delete);
router.put('/:id', clientsController.update);
router.get('/:id', clientsController.show);

export default router;

import { Router } from 'express';
import productsController from '../controllers/ProductsController';

const router = new Router();

router.post('/', productsController.store);
router.get('/', productsController.index);
router.delete('/:id', productsController.delete);
router.put('/:id', productsController.update);
router.get('/:id', productsController.show);

export default router;

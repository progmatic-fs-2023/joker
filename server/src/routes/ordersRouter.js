import { Router } from 'express';
import ordersController from '../controllers/ordersController';

const router = Router();

router.get('/', ordersController.orderList);
// router.get('/:id', ordersController.singleOrderOfUser);
router.get('/:id', ordersController.getOrder);
router.delete('/:id', ordersController.deleteOrder);
// TODO below endpoints could be unnecessary
router.post('/addToCart', ordersController.create);
router.put('/updateCartItem', ordersController.update);
router.post('/finalizeOrder', ordersController.finalize);

export default router;

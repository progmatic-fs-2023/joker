import { Router } from 'express';
import orderController from '../controllers/orderController';

const router = Router();

router.get('/:orderId', orderController.getOrder);
router.get('/', orderController.listOrders);
router.post('/addToCart', orderController.create);
router.put('/updateCartItem', orderController.update);
router.post('/finalizeOrder', orderController.finalize);
router.delete('/:orderID', orderController.deleteOrder);

export default router;

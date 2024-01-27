import { Router } from 'express';
import registerController from '../controllers/registerController';

const router = Router();

router.post('/', registerController.handleNewUser);
router.get('/:id', registerController.handleUserVerify);

export default router;

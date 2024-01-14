import { Router } from 'express';
import registerController from '../controllers/registerController';

const router = Router();

router.post('/', registerController.handleNewUser);

export default router;

import { Router } from 'express';
import usersController from '../controllers/usersController';

const router = Router();

router.get('/', usersController.usersList);
router.get('/:id', usersController.singleUser);

export default router;

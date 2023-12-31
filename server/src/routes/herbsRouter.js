import { Router } from 'express';
import herbsController from '../controllers/herbsController';

const router = Router();

router.get('/', herbsController.herbsList);
router.get('/:id', herbsController.herb);

export default router;

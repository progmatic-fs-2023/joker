import { Router } from 'express';
import { format } from 'date-fns';
import refreshTokenController from '../controllers/refreshTokenController';

const router = Router();

router.use((req, res, next) => {
  console.log('Now:', format(Date.now(), 'yyy.MM.dd\tHH:mm:ss'));
  next();
});
router.get('/', refreshTokenController.handleRefreshToken);

export default router;

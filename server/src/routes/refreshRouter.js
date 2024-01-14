import { Router } from 'express';
import refreshTokenController from '../controllers/refreshTokenController';

const router = Router();

router.use((req, res, next) => {
  console.log('Now:', Date.now());
  next();
});
router.get('/', refreshTokenController.handleRefreshToken);

export default router;

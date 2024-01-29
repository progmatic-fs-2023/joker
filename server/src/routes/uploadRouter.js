import { Router } from 'express';
import uploadController from '../controllers/uploadController';
import fileSizeLimiter from '../middlewares/fileSizeLimiter';

const router = Router();

router.post('/', fileSizeLimiter, uploadController.fileUpload);

export default router;

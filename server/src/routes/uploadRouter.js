import { Router } from 'express';
import uploadController from '../controllers/uploadController';

const router = Router();

router.post('/', uploadController.fileUpload);

export default router;

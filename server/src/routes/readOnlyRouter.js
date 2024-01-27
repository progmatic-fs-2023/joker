import { Router } from 'express';
import blogController from '../controllers/blogController';

const router = Router();

// express supports regex , ^ starts with, $ ends with
router.route('/').get(blogController.getAllBlog);
router.route('/:id').get(blogController.readPost);

export default router;

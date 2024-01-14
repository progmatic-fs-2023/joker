import { Router } from 'express';
import blogController from '../../controllers/blogController';
import verifyRoles from '../../middlewares/verifyRoles';

const router = Router();

// express supports regex , ^ starts with, $ ends with
router
  .route('/')
  .get(blogController.getAllBlogs)
  .post(verifyRoles('SUPERADMIN', 'ADMIN'), blogController.createNewBlog)
  .put(verifyRoles('SUPERADMIN', 'ADMIN'), blogController.updateBlog)
  .delete(verifyRoles('SUPERADMIN'), blogController.deleteBlog);

router.route('/:id').get(blogController.getBlog);

export default router;

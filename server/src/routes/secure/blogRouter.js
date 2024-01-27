import { Router } from 'express';
import blogController from '../../controllers/blogController';
// import verifyRoles from '../../middlewares/verifyRoles';

const router = Router();

// express supports regex , ^ starts with, $ ends with
router
  .route('/')
  .get(blogController.blogsList)
  .post(blogController.newPost)
  .put(blogController.updatePost)
  .delete(blogController.deletePost);
// .post(verifyRoles('SUPERADMIN', 'ADMIN'), blogController.createNewBlog)
// .put(verifyRoles('SUPERADMIN', 'ADMIN'), blogController.updateBlog)
// .delete(verifyRoles('SUPERADMIN'), blogController.deleteBlog);

router.route('/:id').get(blogController.blogsList).delete(blogController.deletePost);

export default router;

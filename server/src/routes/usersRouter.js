import { Router } from 'express';
import usersController from '../controllers/usersController';

const router = Router();

router
  .route('/')
  .get(usersController.usersList)
  .post(usersController.newUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);
// .post(verifyRoles('SUPERADMIN', 'ADMIN'), usersController.newUser)
// .put(verifyRoles('SUPERADMIN', 'ADMIN'), usersController.updateUser)
// .delete(verifyRoles('SUPERADMIN'), usersController.deleteUser);

router
  .route('/:id')
  .get(usersController.singleUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);
export default router;

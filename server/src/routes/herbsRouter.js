import { Router } from 'express';
import herbsController from '../controllers/herbsController';

const router = Router();

router.get('/', herbsController.herbsList).post('/', herbsController.newHerb);

router
  .get('/:id', herbsController.herb)
  .patch('/:id', herbsController.herbUpdate)
  .delete('/:id', herbsController.deleteHerb);

router.post('/feedback/:id', herbsController.feedback);
router.get('/feedback/:id', herbsController.feedbackByHerb);
router.delete('/feedback/:feedbackId', herbsController.deleteFeedback);
router.put('/feedback/:feedbackId', herbsController.editFeedback);

export default router;

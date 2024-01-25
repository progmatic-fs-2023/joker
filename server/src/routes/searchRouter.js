import { Router } from 'express';
import searchController from '../controllers/searchController';

const router = Router();

router.get('/', searchController.search);
router.get('/suggestions', searchController.getSuggestions);

export default router;

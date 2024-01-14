import { Router } from 'express';

const router = Router();

// express supports regex , ^ starts with, $ ends with
router.get('^/$|/index(.html)?', (req, res) => {
  // res.sendFile('./views/index.html', { root: __dirname } ))
  res.sendFile('index.html');
});

export default router;

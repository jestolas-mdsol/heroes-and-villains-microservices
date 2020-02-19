import express from 'express';
import villainsController from './controllers';

const router = express.Router();

// get, post, put, patch, update, delete
router.get('/', (req, res) => {
  const villains = villainsController.getAll(req, res);

  res.json({ villains });
});

router.get('/:id', (req, res) => {
  const villain = villainsController.get(req, res);

  if (!villain) {
    res.status(500).json({ error: 'Villain Not Available' });
  } else {
    res.json({ villain });
  }
});

export default router;

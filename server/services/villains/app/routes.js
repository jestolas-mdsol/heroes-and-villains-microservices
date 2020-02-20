import express from 'express';
import villainsController from './controllers';

const router = express.Router();

// get, post, put, patch, update, delete
router.get('/', (req, res) => {
  const villains = [];

  if (req.query.ids && typeof req.query.ids === 'object' && req.query.ids.length) {
    // need error generator when no villains are found
    res.json({ villains: [...villainsController.getMultiple(req, res)] });
  } else {
    res.json({ villains: [...villainsController.getAll(req, res)] });
  }
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

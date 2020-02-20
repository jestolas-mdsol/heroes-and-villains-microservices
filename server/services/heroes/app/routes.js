import express from 'express';
import heroesController from './controllers';

const router = express.Router();

// get, post, put, patch, update, delete
router.get('/', (req, res) => {
  heroesController.getMultiple(req, res);
});

router.get('/:id', (req, res) => {
  const hero = heroesController.get(req, res);

  if (!hero) {
    res.status(500).json({ error: 'Hero Not Available' });
  } else {
    res.json({ hero });
  }
});

export default router;

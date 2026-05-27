const express = require('express');
const router  = express.Router();
const db      = require('../db');

// GET — sabhi photos lao
router.get('/', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM gallery ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST — photo add karo
router.post('/', async (req, res) => {
  try {
    const { title, category, image_url } = req.body;
    await db.query(
      'INSERT INTO gallery (title, category, image_url) VALUES ($1,$2,$3)',
      [title, category, image_url]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE — photo delete karo
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM gallery WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const express = require('express');
const router  = express.Router();
const db      = require('../db');

// GET — sabhi notices lao
router.get('/', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM notices ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST — notice add karo
router.post('/', async (req, res) => {
  try {
    const { title, description, category, file_url } = req.body;
    await db.query(
      'INSERT INTO notices (title, description, category, file_url) VALUES ($1,$2,$3,$4)',
      [title, description, category, file_url]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT — notice update karo
router.put('/:id', async (req, res) => {
  try {
    const { title, description, category, file_url } = req.body;
    await db.query(
      'UPDATE notices SET title=$1, description=$2, category=$3, file_url=$4 WHERE id=$5',
      [title, description, category, file_url, req.params.id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE — notice delete karo
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM notices WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
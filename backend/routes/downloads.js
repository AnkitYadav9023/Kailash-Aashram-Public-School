const express = require('express');
const router  = express.Router();
const db      = require('../db');

// GET — sabhi downloads lao
router.get('/', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM downloads ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST — download add karo
router.post('/', async (req, res) => {
  try {
    const { name, file_url, file_size, category } = req.body;
    await db.query(
      'INSERT INTO downloads (name, file_url, file_size, category) VALUES ($1,$2,$3,$4)',
      [name, file_url, file_size, category]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE — download delete karo
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM downloads WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
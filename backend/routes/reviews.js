const express = require('express');
const router  = express.Router();
const db      = require('../db');

// GET — sabhi approved reviews (website ke liye)
router.get('/', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM reviews WHERE approved = true ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET — sabhi pending reviews (admin ke liye)
router.get('/pending', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM reviews WHERE approved = false ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST — naya review submit karo (user se)
router.post('/', async (req, res) => {
  try {
    const { name, role, review, stars } = req.body;
    await db.query(
      'INSERT INTO reviews (name, role, review, stars) VALUES ($1,$2,$3,$4)',
      [name, role, review, stars]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT — review approve karo (admin se)
router.put('/:id/approve', async (req, res) => {
  try {
    await db.query(
      'UPDATE reviews SET approved = true WHERE id = $1',
      [req.params.id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE — review delete karo
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM reviews WHERE id = $1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
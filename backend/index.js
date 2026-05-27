const express = require('express');
const cors    = require('cors');
require('dotenv').config();
require('./db');

const app  = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/notices',   require('./routes/notices'));
app.use('/api/gallery',   require('./routes/gallery'));
app.use('/api/downloads', require('./routes/downloads'));

app.get('/', (req, res) => {
  res.json({ message: '✅ School backend is running!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
const express = require('express');
const router = express.Router();
const pool = require('../db/config');

console.log('vamos a ver quien es la url', process.env.DATABASE_URL);

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM animals ORDER BY id');
    res.json(result.rows);
  } catch (error) {
    console.error('Error obteniendo animales:', error.message);
    res.status(500).json({ error: 'Error al obtener animales' });
  }
});

module.exports = router;

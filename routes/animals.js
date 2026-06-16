const express = require('express');
const router = express.Router();
const pool = require('../db/config');

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM animals ORDER BY id');
    res.json(result.rows);
  } catch (error) {
    console.error('Error obteniendo animales:', error);
    res.status(500).json({ error: 'Error al obtener animales' });
  }
});

module.exports = router;

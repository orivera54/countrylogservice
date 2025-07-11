const express = require('express');
const router = express.Router();
const db = require('./db');

// 🗓 Consultar por rango de fechas
router.get('/', async (req, res) => {
  const { start, end } = req.query;
  const result = await db.query(
    `SELECT * FROM log_use_app WHERE request_timestamp BETWEEN $1 AND $2 ORDER BY request_timestamp DESC`,
    [start, end]
  );
  res.json(result.rows);
});

// 🖊 Actualizar username
router.put('/:id', async (req, res) => {
  const { username } = req.body;
  const { id } = req.params;
  await db.query(
    `UPDATE log_use_app SET username = $1 WHERE id = $2`,
    [username, id]
  );
  res.sendStatus(200);
});

// 🧹 Eliminar registro
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await db.query(`DELETE FROM log_use_app WHERE id = $1`, [id]);
  res.sendStatus(200);
});

module.exports = router;
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const logsRoutes = require('./logs.routes');
app.use('/api/logs', logsRoutes);

app.listen(80, () => console.log('Backend en puerto 80'));


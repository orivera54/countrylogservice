const express = require('express');
const cors = require('cors');
const app = express();

//  Configura los orígenes permitidos
const corsOptions = {
  origin: [
    'http://localhost:4200',
    'https://countryapp-qqfda3mrw-orivera54s-projects.vercel.app',
    'https://countryapp-ten.vercel.app/'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false
};

app.use(cors(corsOptions));


app.use(express.json());
const logsRoutes = require('./logs.routes');
app.use('/api/logs', logsRoutes);

app.listen(80, () => console.log('Backend en puerto 80'));


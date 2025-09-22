const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

//* Crear el servidor de express
const app = express();

//* Data Base
dbConnection();

//* CORS config
const allowedOrigins = [
  "https://calendar-app-hernanarevalo.vercel.app",
  "http://localhost:5173"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));

// 👇 Manejar OPTIONS explícitamente (a veces necesario en Railway)
app.options("*", cors());

// Public directory
app.use(express.static('public'));

// Lectura y parseo de body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});

const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

//* Crear el servidor de express
const app = express();

//* Data Base
dbConnection();


// public directory
app.use( express.static('public'))

// Lectura y parseo de body
app.use( express.json() );



// Rutas
app.use('/api/auth', require('./routes/auth') )
// TODO: CRUD: Eventos


// Escuchar peticiones
app.listen( process.env.PORT, () => {
        console.log(`server running on port ${ process.env.PORT }`);
    }
)


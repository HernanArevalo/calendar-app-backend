const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

//* Crear el servidor de express
const app = express();

//* Data Base
dbConnection();

// cors 

app.use(cors());


// public directory
app.use( express.static('public'))

// Lectura y parseo de body
app.use( express.json() );



// Rutas
app.use('/api/auth', require('./routes/auth') )
app.use('/api/events', require('./routes/events') )
// TODO: CRUD: Eventos


// Escuchar peticiones
app.listen( process.env.PORT, () => {
        console.log(`server running on port ${ process.env.PORT }`);
    }
)


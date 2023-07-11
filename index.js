const express = require('express');
require('dotenv').config();


//* Crear el servidor de express
const app = express();

// public directory
app.use( express.static('public'))


//* Rutas
app.use('/api/auth', require('./routes/auth') )
// TODO: CRUD: Eventos


//* Escuchar peticiones
app.listen( process.env.PORT, () => {
        console.log(`server running on port ${ process.env.PORT }`);
    }
)


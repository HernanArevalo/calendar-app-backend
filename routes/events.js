/* 
    Events routes
    /api/events
*/

const express = require('express');
const { check } = require('express-validator')

const isDate = require('../helpers/isDate');
const { fieldValidator } = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getEvents, createEvent, uploadEvent, deleteEvent } = require('../controllers/events');

const router = express.Router();

router.use( validateJWT );

// Get events
router.get(
    '/', 
    getEvents 
);

// Create event
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio no válida').custom( isDate ),
        check('end', 'Fecha de fin no válida').custom( isDate ),
        fieldValidator

    ],
    createEvent
);

// Upload event
router.put(
    '/:id', 
    uploadEvent 
);

// Delete event
router.delete(
    '/:id', 
    deleteEvent 
);


module.exports = router;
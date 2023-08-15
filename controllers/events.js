const express = require('express');
const Event = require('../models/Event')

const getEvents = ( req, res = express.response ) => {

    try {

        res.status(200).json(
            {
                ok: true,
                msg: 'getEvents'
            }
        )
    } catch ( error ){

    }
}
// {
//     ok: true,
//     msg: 'getEvents'
// }


const createEvent = async( req, res = express.response ) => {

    const event = new Event( req.body )


    try {

        const savedEvent = await event.save();

        res.status(200).json(
            {
                ok: true,
                msg: 'createEvent',
                event: savedEvent
            }
        )
        
    } catch ( error ){
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'talk with admin'
        });
    }
}
// {
//     ok: true,
//     msg: 'createEvent'
// }

const uploadEvent = ( req, res = express.response ) => {

    try {

        res.status(200).json(
            {
                ok: true,
                msg: 'uploadEvent'
            }
        )
    } catch ( error ){

    }
}
// {    /12345678
//     ok: true,
//     msg: 'uploadEvent'
// }


const deleteEvent = ( req, res = express.response ) => {

    try {

        res.status(200).json(
            {
                ok: true,
                msg: 'deleteEvent'
            }
        )
    } catch ( error ){

    }
}
// {    /12345678
//     ok: true,
//     msg: 'deleteEvent'
// }


module.exports = {
    getEvents,
    createEvent,
    uploadEvent,
    deleteEvent
}
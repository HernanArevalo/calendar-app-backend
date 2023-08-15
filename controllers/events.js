const express = require('express');

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


const createEvent = ( req, res = express.response ) => {


    console.log(req.body)

    try {

        res.status(200).json(
            {
                ok: true,
                msg: 'createEvent'
            }
        )
        
    } catch ( error ){

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
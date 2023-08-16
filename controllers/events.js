const express = require('express');
const Event = require('../models/Event')




const getEvents = async( req, res = express.response ) => {

    const events = await Event.find()
                              .populate('user','name')


    try {

        return res.status(200).json(
            {
                ok: true,
                events
            }
        )
    } catch ( error ){

    }
}



const createEvent = async( req, res = express.response ) => {

    const event = new Event( req.body )


    try {

        event.user = req.uid

        const savedEvent = await event.save();

        return res.status(200).json(
            {
                ok: true,
                msg: 'createEvent',
                event: savedEvent
            }
        )
        
    } catch ( error ){
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'talk with admin'
        });
    }
}



const uploadEvent = async ( req, res = express.response ) => {

    const eventId = req.params.id;
    const uid = req.uid;


    try {

        const event = await Event.findById( eventId );

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'Event not found'
            })
        }

        if ( event.user.toString()  !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            })
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const eventUpdated = await Event.findByIdAndUpdate( event.id, newEvent, {new: true} );

        return res.json({
            ok: true,
            event: eventUpdated
        })

    } catch ( error ){
        return res.status(500).json({
            ok: false,
            msg: 'talk with admin'
        })
    }
}



const deleteEvent = async( req, res = express.response ) => {

    const eventId = req.params.id;
    const uid = req.uid;


    try {

        const event = await Event.findById( eventId );

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'Event not found'
            })
        }

        if ( event.user.toString()  !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            })
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const eventDeleted = await Event.findByIdAndDelete( event.id, );

        return res.json({
            ok: true,
            msg: 'Event deleted',
            event: eventDeleted
        })

    } catch ( error ){
        return res.status(500).json({
            ok: false,
            msg: 'talk with admin'
        })
    }
}



module.exports = {
    getEvents,
    createEvent,
    uploadEvent,
    deleteEvent
}
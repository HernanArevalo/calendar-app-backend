const express = require('express');
const User = require('../models/User')


const createUser = async(req, res = express.response ) => {

    // const { name, email, password } = req.body;

    try {
        const user = new User( req.body );
    
        await user.save();
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Please talk with admin.'
        })
        console.log(error)
    }



    res.status(201).json({
        ok: true,
        msg: 'registro',
        name, 
        email, 
        password,
    })
}

const userLogin = (req, res = express.response ) => {

    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
        email, 
        password,

    })
}

const renewToken = (req, res = express.response ) => {

    res.json({
        ok: true,
        msg: 'renew'
    })
}


module.exports = { 
    createUser,
    userLogin,
    renewToken

 };
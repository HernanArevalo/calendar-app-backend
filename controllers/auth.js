const express = require('express');


const createUser = (req, res = express.response ) => {

    res.json({
        ok: true,
        msg: 'registro'
    })
}

const login = (req, res = express.response ) => {

    res.json({
        ok: true,
        msg: 'login'
    })
}

const renew = (req, res = express.response ) => {

    res.json({
        ok: true,
        msg: 'renew'
    })
}


module.exports = { 
    createUser,

 };
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt')



const createUser = async(req, res = express.response ) => {

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email })

        if (user){
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe una cuenta con ese email.'
            })
        }


        user = new User( req.body );

        // Encriptar password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );


        await user.save();

        // Generar JWT
        const token = await generateJWT( user.id, user.name )


    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });



        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Please talk with admin.'
        })
    };


}

const userLogin = async(req, res = express.response ) => {

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email })

        if (!user){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            })
        }

        //confirm passwords
        const validPassword = bcrypt.compareSync( password, user.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            })
            
        }

        // Generar JWT
        const token = await generateJWT( user.id, user.name )


        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token

        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Please talk with admin.'
        })
    }


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
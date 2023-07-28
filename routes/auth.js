/* 
    User routes / Auth 
    host + /api/auth

*/

const express = require('express');
const { check } = require('express-validator')
const router = express.Router();

const { createUser, userLogin, renewToken } = require('../controllers/auth');



router.post(
    '/new', 
    [ // middlewares
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener 6 caracteres').isLength({ min: 6 }),
    ] ,
    createUser
);

router.post(
    '/', 
    [ // middlewares
        check('email','El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener 6 caracteres').isLength({ min: 6 }),
    ],
    userLogin
);

router.get('/renew', renewToken );

module.exports = router;
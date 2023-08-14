/* 
    User routes / Auth 
    host + /api/auth
*/

const express = require('express');
const { check } = require('express-validator')
const { fieldValidator } = require('../middlewares/field-validator');
const { createUser, userLogin, renewToken } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/validate-jwt')

const router = express.Router();


router.post(
    '/new', 
    [ // middlewares
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener 6 caracteres').isLength({ min: 6 }),
        fieldValidator
    ] ,
    createUser
);


router.post(
    '/', 
    [ // middlewares
        check('email','El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener 6 caracteres').isLength({ min: 6 }),
        fieldValidator
    ],
    userLogin
);


router.get('/renew', validateJWT, renewToken );






module.exports = router;
/* 
    User routes / Auth 
    host + /api/auth

*/

const express = require('express');
const router = express.Router();

const { createUser } = require('../controllers/auth');



router.post('/new', createUser );

router.post('/',  );

router.get('/renew',  );

module.exports = router;
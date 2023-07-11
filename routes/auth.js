const express = require('express');
const router = express.Router();



router.get('/',(req, res) => {

        console.log('se requiere slash');
        res.json({
            ok: true
        })
    }
);


module.exports = router;
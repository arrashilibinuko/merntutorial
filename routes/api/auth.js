const express = require('express');
const router = express.Router();

//GET api/auth
//Auth route
//Public
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;

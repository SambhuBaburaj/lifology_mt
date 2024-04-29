var express = require('express');
const { RegisterUser } = require('../Controller/RegisterUser');
const { loginHelper } = require('../Controller/Login');

// const JWTvarify = require('../Controller/ValidateUser');

var router = express.Router();
/* GET home page. */
router.post('/userregister',RegisterUser);
router.post('/loginuser',loginHelper);

module.exports = router;
 
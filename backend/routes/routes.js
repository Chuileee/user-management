var express = require('express');
var userController = require('../src/userController');
const router = express.Router();

router.route('/user/save').post(userController.saveUserInfoController);



module.exports = router;
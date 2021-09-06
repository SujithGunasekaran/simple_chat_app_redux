const router = require('express').Router();
const userController = require('../Controller/userController');

router.route('/').post(userController.loginUser);

module.exports = router;

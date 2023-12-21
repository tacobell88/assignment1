const express = require('express');
const router = express.Router();

const { showAllUser } = require('../controllers/UserController');
const { userLogin } = require('../controllers/AuthController');

router.route('/users/getUsers').get(showAllUser);
router.route('/login').post(userLogin);

module.exports = router;
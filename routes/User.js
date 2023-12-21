const express = require('express');
const router = express.Router();

const { showAllUser } = require('../controllers/UserController');

router.route('/users/getUsers').get(showAllUser);

module.exports = router;
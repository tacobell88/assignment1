const db = require('../config/database');
const catchASyncError = require('../middlewares/catchASyncError');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken')

// user login functionality
exports.userLogin = catchASyncError(async (req, res) => {
    const { userId, password } = req.body;

    //if username or password is not entered
    if (!userId || !password) {
        res.status(400).send('Invalid Credentials');
    }

    //checking if username exist in database
    const [row, field] = await db.execute('SELECT * FROM accounts WHERE username = ?', [userId]);

    //if username does not exist in the database
    if (row.length == 0) {
        res.status(400).send('Invalid Credentials');
    }

    //check if password matches entered password
    const isPassMatch = await bcrypt.compare(password, row[0].password);
    if (!isPassMatch) {
        return res.status(401).send('Invalid Credentials');
    }
    
    //assigning token
    const tkn = jwt.sign({userId : row[0].username}, process.env.JWT_SECRET, 
                        {expiresIn : process.env.JWT_EXPIRES_TIME});
});
const db = require('../config/database');

exports.showAllUser = async (req, res, next) => {
    const [rows, field] = await db.execute(`SELECT * FROM accounts`);

    return res.status(200).json({
        success: true,
        message: rows
    })
}
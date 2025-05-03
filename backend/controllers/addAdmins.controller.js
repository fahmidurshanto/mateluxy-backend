const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../utils/erros.js");
const Admin = require("../models/admin.model.js");

const addAdmins = async (req, res, next) => {
    const { username, fullName, email, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newAdmin = new Admin({
        username,
        fullName,
        email,
        password: hashedPassword,
    });
    try {
        await newAdmin.save();
        res.status(201).json('New Admin Has Been Added');
    } catch (error) {
        next(error);
    }
};

module.exports = { addAdmins };
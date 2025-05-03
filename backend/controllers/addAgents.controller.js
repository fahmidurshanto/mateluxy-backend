const Agent = require("../models/agents.model.js");
const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../utils/erros.js");

const addAgents = async (req, res, next) => {
    const { username, fullName, email, contactNumber, position, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newAgent = new Agent({
        username: username,
        fullName: fullName,
        email: email,
        contactNumber: contactNumber,
        position: position,
        password: hashedPassword,
    });
    try {
        await newAgent.save();
        res.status(201).json('New Agent Has Been Added');
    } catch (error) {
        next(error);
    }
};

module.exports = { addAgents };
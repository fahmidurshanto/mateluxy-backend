const Agent = require("../models/agents.model.js");
const { errorHandler } = require("../utils/erros.js");

const agents = async (req, res, next) => {
    try {
        // Fetch all agents from the database
        const allAgents = await Agent.find().select('-password');  // Exclude password field
        res.status(200).json(allAgents);
    } catch (error) {
        next(error);
    }
};

module.exports = { agents };
import Agent from "../models/agents.model.js";
import { errorHandler } from "../utils/erros.js";

export const agents = async (req, res, next) => {
    try {
        // Fetch all agents from the database
        const allAgents = await Agent.find().select('-password');  // Exclude password field
        res.status(200).json(allAgents);
    } catch (error) {
        next(error);
    }
};

// New controller for single agent by ID
export const getAgentById = async (req, res, next) => {
    try {
        const agent = await Agent.findById(req.params.id).select('-password');
        
        if (!agent) {
            return next(errorHandler(404, 'Agent not found'));
        }
        
        res.status(200).json(agent);
    } catch (error) {
        next(error);
    }
};
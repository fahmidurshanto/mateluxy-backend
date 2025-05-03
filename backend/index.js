import express from 'express';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
import rentPropertiesRouter from './Routes/RentProperties.routes.js';
import agentsRouter from './Routes/agents.routes.js';
import addAgents from './Routes/addAgents.routes.js';
import adminsRouter from './Routes/admins.routes.js';
import addAdmins from './Routes/addAdmins.route.js';
import adminSignIn from './Routes/adminSignIn.route.js';
import authRouter from './Routes/authStatus.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());


mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});


app.use('/api/properties', rentPropertiesRouter);
app.use('/api', agentsRouter);
app.use('/api/agents', addAgents);
app.use('/', adminsRouter);
app.use('/admins', addAdmins);
app.use('/api', adminSignIn);
app.use(cookieParser());
app.use('/api/admin', authRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({ 
        success: false,
        status: statusCode,
        message
     });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});





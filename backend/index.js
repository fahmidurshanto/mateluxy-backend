const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const rentPropertiesRouter = require('./Routes/RentProperties.routes');
const agentsRouter = require('./Routes/agents.routes');
const addAgents = require('./Routes/addAgents.routes');
const adminsRouter = require('./Routes/admins.routes');
const addAdmins = require('./Routes/addAdmins.route');
const adminSignIn = require('./Routes/adminSignIn.route');
const authRouter = require('./Routes/authStatus');
const cookieParser = require('cookie-parser');
const cors = require('cors');

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





//Imports
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes');

// Create Express and Middleware
const app = express();
app.use(express.json());

// Constants
const mongoUri = 'mongodb://localhost:27017/taskdb';
const PORT = 3000;

// MongoDB Connection
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use task routes
app.use('/', taskRoutes);

//Fire up the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config'); // Import the config file

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Set environment (default to development if not set)
const env = process.env.NODE_ENV || 'development';

// Get the correct MongoDB URI based on the environment
const mongoURI = config.mongoURI[env];

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to MongoDB (${env})`))
    .catch(err => console.error("MongoDB connection error:", err));

// Check if the database connection is successful
let db = mongoose.connection;
db.once('open', () => {
    console.log('Database connected successfully');
});

// Initializing the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());

app.use('/', index);
app.use('/image', image);

// Set PORT
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is listening at http://localhost:${PORT}`);
// });
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening at http://0.0.0.0:${PORT}`)
});

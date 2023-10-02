const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Atlas Connection (replace connection string)
mongoose.connect('mongodb+srv://your-connection-string-here', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
});

// Define routes here...

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
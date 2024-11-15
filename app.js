const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Use port from .env if available

mongoose
  .connect(process.env.MONGO_URI) // No need for extra options
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// API Routes
const listingRoutes = require('./routes/listings'); // Import routes for listings
app.use('/api/listings', listingRoutes); // Mount routes at /api/listings

// Base route for health check or welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Airbnb API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

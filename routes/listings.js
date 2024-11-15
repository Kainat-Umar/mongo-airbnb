const express = require('express');
const Listing = require('../models/listing');
const router = express.Router();

// GET /api/listing - Fetch all listings
router.get('/listing', async (req, res) => {
    try {
        const listings = await Listing.find();
        res.json(listings);
    } catch (error) {
        console.error("Error fetching listings:", error);
        res.status(500).json({ error: 'An error occurred while fetching listings' });
    }
});

module.exports = router;


//pagination
// router.get('/listing', async (req, res) => {
//     const { page = 1, limit = 10 } = req.query; // Default values
//     try {
//         const listings = await Listing.find()
//             .limit(limit * 1)
//             .skip((page - 1) * limit)
//             .exec();
//         res.json(listings);
//     } catch (error) {
//         res.status(500).json({ error: 'An error occurred while fetching listings' });
//     }
// });

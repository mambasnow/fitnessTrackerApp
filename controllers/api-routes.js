// Import express router
const express = require('express');
const router = express.Router();
const db = require('../models/');

// /api routes

// /api/workouts
// Get workouts 
router.get('/workouts', async (req, res) => {
    try {
        const d = await db.Workout.find({});
        res.json(d);
        
    } catch (error) {
        res.json(error);

    }
})

// /api/workouts/range
// Get workouts in range
router.get('/workouts/range', async (req, res) => {
    try {
        const d = await db.Workout.find({});
        res.json(d.reverse().slice(0, 7)); // Returns only the last 7 workouts 

    } catch (error) {
        res.json(error);
    }
})

// /api/workouts
// Create a workout 
router.post('/workouts', async ( {body}, res) => {
    try {
        const d = await db.Workout.create(body);
        res.json(d);

    } catch (error) {
        res.json(error);
    }
})


// /api/workouts/:id
// Add exercise 
router.put('/workouts/:id', async (req, res) => {
    try {
        const d = await db.Workout.findByIdAndUpdate(req.params.id, {
            $push: {
                exercises: req.body
            }
        })

    } catch (error) {
        res.json(error);
    }
})


module.exports = router;
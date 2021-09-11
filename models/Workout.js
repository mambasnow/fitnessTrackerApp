const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String, 
                required: "Type is required", 
                trim: true
            },
            name: {
                type: String, 
                required: "Name is required",
                trim: true
            },
            duration: {
                type: Number,
                required: "Required for both cardio and resistance exercises"
            },
            weight: {
                type: Number

            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
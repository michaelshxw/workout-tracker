const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
            },
            type: {
                type: String,
                trim: true,
            },
            weight: {
                type: Number,
                default: 0,
            },
            sets: {
                type: Number,
                default: 0,
            },
            reps: {
                type: Number,
                default: 0,
            },
            duration: {
                type: Number,
            },
            distance: {
                type: Number,
                default: 0,
            }
        }
    ]
})
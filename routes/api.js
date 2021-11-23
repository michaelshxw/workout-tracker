const db = require('../models');
const router = require('express').Router();

// get workouts

router.get('/api/workouts', (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        console.log('all workouts');
        console.log(dbWorkout);
        dbWorkout.forEach(workout => {
            const total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;
        })
        res.json(dbWorkout);
    }).catch(error => {
        res.json(error);
    });
});

// add exercise


// create workout


// get workouts by type


module.exports = router; 
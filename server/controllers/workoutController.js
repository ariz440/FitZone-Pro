import Workout from "../models/Workout.js"

// Add Workout
export const addWorkout = async (req, res) => {

    try {

        const {

            userId,
            workoutName,
            workoutType,
            duration,
            calories

        } = req.body

        const workout = await Workout.create({

            userId,
            workoutName,
            workoutType,
            duration,
            calories

        })

        res.status(201).json(workout)

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        })

    }

}

// Get Workouts
export const getWorkouts = async (req, res) => {

    try {

        const workouts = await Workout.find()

        res.status(200).json(workouts)

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        })

    }

}
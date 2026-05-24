import express from "express"

import {

    addWorkout,
    getWorkouts

} from "../controllers/workoutController.js"

const router = express.Router()

// Add Workout
router.post("/", addWorkout)

// Get Workouts
router.get("/", getWorkouts)

export default router
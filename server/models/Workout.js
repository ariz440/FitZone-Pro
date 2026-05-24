import mongoose from "mongoose"

const workoutSchema = new mongoose.Schema(

    {

        userId: {

            type: String,

            required: true

        },

        workoutName: {

            type: String,

            required: true

        },

        workoutType: {

            type: String,

            required: true

        },

        duration: {

            type: Number,

            required: true

        },

        calories: {

            type: Number,

            required: true

        }

    },

    {

        timestamps: true

    }

)

const Workout = mongoose.model(

    "Workout",

    workoutSchema

)

export default Workout
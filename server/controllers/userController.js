import User from "../models/User.js"

export const updateProfile = async (req, res) => {

    try {

        const {

            email,

            name,

            age,

            gender,

            goal,

            image

        } = req.body

        const updatedUser = await User.findOneAndUpdate(

            { email },

            {

                name,

                age,

                gender,

                goal,

                image

            },

            { new: true }

        )

        res.status(200).json(updatedUser)

    }

    catch (error) {

        console.log(error)

        res.status(500).json({

            message: "Profile update failed"

        })

    }

}
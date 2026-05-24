import User from "../models/User.js"

import Contact from "../models/Contact.js"

// GET ALL USERS
export const getAllUsers = async (

    req,
    res

) => {

    try {

        const users = await User.find()

        res.status(200).json(users)

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        })

    }

}

// GET ALL CONTACT MESSAGES
export const getAllMessages = async (

    req,
    res

) => {

    try {

        const messages = await Contact.find()

        res.status(200).json(messages)

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        })

    }

}
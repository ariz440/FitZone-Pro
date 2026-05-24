import express from "express"

import User from "../models/User.js"

import Contact from "../models/Contact.js"

const router = express.Router()

// GET ALL USERS
router.get("/users", async (req, res) => {

    try {

        const users = await User.find()

        res.json(users)

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        })

    }

})

// GET ALL CONTACT MESSAGES
router.get("/messages", async (req, res) => {

    try {

        const messages = await Contact.find()

        res.json(messages)

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        })

    }

})

export default router
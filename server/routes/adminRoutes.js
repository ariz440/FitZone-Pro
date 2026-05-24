import express from "express"

import {

    getAllUsers,
    getAllMessages

} from "../controllers/adminController.js"

const router = express.Router()

// USERS
router.get(

    "/users",

    getAllUsers

)

// CONTACT MESSAGES
router.get(

    "/messages",

    getAllMessages

)

export default router
import express from "express"

import {

    sendMessage

} from "../controllers/contactController.js"

const router = express.Router()

// Send Message
router.post("/", sendMessage)

export default router
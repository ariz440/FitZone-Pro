import express from "express"

import {

  updateProfile

} from "../controllers/userController.js"

const router = express.Router()

router.put(

  "/update-profile",

  updateProfile

)

export default router
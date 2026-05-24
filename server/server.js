import express from "express"

import mongoose from "mongoose"

import cors from "cors"

import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes.js"

import contactRoutes from "./routes/contactRoutes.js"

import userRoutes from "./routes/userRoutes.js"

dotenv.config()

const app = express()

// MIDDLEWARE
app.use(cors())

app.use(express.json({ limit: "50mb" }))

app.use(express.urlencoded({

  extended: true,

  limit: "50mb"

}))

// ROUTES
app.use("/api/auth", authRoutes)

app.use("/api/contact", contactRoutes)

app.use("/api/user", userRoutes)

// TEST ROUTE
app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
  res.send("FitZone Pro Backend Running 🚀")
})

// DATABASE CONNECT
mongoose.connect(process.env.MONGO_URI)

  .then(() => {

    console.log("MongoDB Connected 😄🔥")

    app.listen(5000, () => {

      console.log("Server Running On Port 5000 🚀")

    })

  })

  .catch((error) => {

    console.log(error)

  })
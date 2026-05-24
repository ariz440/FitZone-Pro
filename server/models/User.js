import mongoose from "mongoose"

const userSchema = new mongoose.Schema(

  {

    name: {

      type: String,

      required: true

    },

    email: {

      type: String,

      required: true,

      unique: true

    },

    password: {

      type: String,

      required: true

    },

    // NEW FIELDS
    age: {

      type: Number,

      default: ""

    },

    gender: {

      type: String,

      default: ""

    },

    goal: {

      type: String,

      default: ""

    },
    isAdmin: {

  type: Boolean,

  default: false

},

    image: {

      type: String,

      default: ""

    }

  },

  {

    timestamps: true

  }

)

const User = mongoose.model(

  "User",

  userSchema

)

export default User
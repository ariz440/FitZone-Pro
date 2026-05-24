import jwt from "jsonwebtoken"

const generateToken = (id) => {

    return jwt.sign(

        { id },

        "mysecretkey",

        {

            expiresIn: "30d"

        }

    )

}

export default generateToken
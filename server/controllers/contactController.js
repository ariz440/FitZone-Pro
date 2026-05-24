import Contact from "../models/Contact.js"

// Send Message
export const sendMessage = async (

    req,
    res

) => {

    try {

        const {

            name,
            email,
            message

        } = req.body

        // Validation
        if (

            !name ||

            !email ||

            !message

        ) {

            return res.status(400).json({

                message: "All fields are required"

            })

        }

        // Save Message
        const newMessage = await Contact.create({

            name,
            email,
            message

        })

        res.status(201).json({

            success: true,

            message: "Message Sent Successfully",

            data: newMessage

        })

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        })

    }

}
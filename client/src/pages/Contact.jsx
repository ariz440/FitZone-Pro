import { useState } from "react"

import axios from "axios"

import emailjs from "@emailjs/browser"

function Contact() {

  // Form State
  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [message, setMessage] = useState("")

  // Send Message
  const submitHandler = async (e) => {

    e.preventDefault()

    try {

      // Save To MongoDB
      await axios.post(

        "http://localhost:5000/api/contact",

        {

          name,
          email,
          message

        }

      )

      // Send Email
      await emailjs.send(

        "service_upvnr3o",

        "template_kodqsqo",

        {

          name,
          email,
          message

        },

        "xwKugz2JGw_U3ATtH"

      )

      alert("Message Sent Successfully 😄🔥")

      // Clear Form
      setName("")

      setEmail("")

      setMessage("")

    }

    catch (error) {

      console.log(error)

      alert("Failed To Send Message")

    }

  }

  return (

    <div className="bg-black min-h-screen text-white px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-16">

        <h1 className="text-5xl md:text-6xl font-bold mb-5">

          Contact

          <span className="text-orange-500">

            {" "}FitZone Pro

          </span>

        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">

          Have questions, feedback, or need support?

          We are always here to help you with your fitness journey.

        </p>

      </div>

      {/* Contact Box */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="bg-[#111111] p-10 rounded-3xl border border-gray-800">

          <h2 className="text-3xl font-bold text-orange-500 mb-8">

            Get In Touch

          </h2>

          <div className="space-y-6 text-lg">

            <div>

              <h3 className="text-gray-400 mb-1">

                Email

              </h3>

              <p className="font-semibold">

                arizm1849@gmail.com

              </p>

            </div>

            <div>

              <h3 className="text-gray-400 mb-1">

                Phone

              </h3>

              <p className="font-semibold">

                +91 7001234567

              </p>

            </div>

            <div>

              <h3 className="text-gray-400 mb-1">

                Address

              </h3>

              <p className="font-semibold">

                Kolkata, India

              </p>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="bg-[#111111] p-10 rounded-3xl border border-gray-800">

          <h2 className="text-3xl font-bold text-orange-500 mb-8">

            Send Message

          </h2>

          <form
            onSubmit={submitHandler}
            className="space-y-6"
          >

            {/* Name */}
            <div>

              <label className="text-gray-400">

                Your Name

              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Enter your name"
                className="w-full mt-2 bg-black border border-gray-700 rounded-2xl p-4 outline-none focus:border-orange-500"
              />

            </div>

            {/* Email */}
            <div>

              <label className="text-gray-400">

                Your Email

              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your email"
                className="w-full mt-2 bg-black border border-gray-700 rounded-2xl p-4 outline-none focus:border-orange-500"
              />

            </div>

            {/* Message */}
            <div>

              <label className="text-gray-400">

                Message

              </label>

              <textarea
                rows="5"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                placeholder="Write your message..."
                className="w-full mt-2 bg-black border border-gray-700 rounded-2xl p-4 outline-none focus:border-orange-500 resize-none"
              ></textarea>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl text-lg font-bold duration-300"
            >

              Send Message

            </button>

          </form>

        </div>

      </div>

    </div>

  )

}

export default Contact
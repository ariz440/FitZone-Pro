import { useState } from "react"

import axios from "axios"

import { useNavigate, Link } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({

        email: "",

        password: ""

    })

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        })

    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const response = await axios.post(

                "http://localhost:5000/api/auth/login",

                formData

            )

            // SAVE USER
            localStorage.setItem(

                "user",

                JSON.stringify(response.data)

            )

            alert("Login Successful 😄🔥")

            navigate("/dashboard")

        }

        catch (error) {

            console.log(error)

            alert("Invalid Email or Password")

        }

    }

    return (

        <div className="min-h-screen bg-black flex items-center justify-center px-4">

            <div className="bg-[#111111] p-10 rounded-3xl w-full max-w-md border border-orange-500 shadow-2xl">

                <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">

                    Login

                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    {/* EMAIL */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
                        required
                    />

                    {/* PASSWORD */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
                        required
                    />

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl text-lg font-bold duration-300"
                    >

                        Login

                    </button>

                </form>

                {/* REGISTER */}
                <p className="text-gray-400 text-center mt-6">

                    Don’t have an account?

                    <Link
                        to="/register"
                        className="text-orange-500 ml-2"
                    >

                        Register

                    </Link>

                </p>

            </div>

        </div>

    )

}

export default Login
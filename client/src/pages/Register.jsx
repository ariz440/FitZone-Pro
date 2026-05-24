import { useState } from "react"
import axios from "axios"

function Register() {

    const [formData, setFormData] = useState({

        name: "",
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

                "http://127.0.0.1:5000/api/auth/register",

                formData

            )

            console.log(response.data)

            alert("Registration Successful 🔥")

        }

        catch (error) {

            console.log(error)

            alert(

                error.response?.data?.message ||

                "Something went wrong"

            )

        }

    }

    return (

        <section className="min-h-screen flex justify-center items-center bg-black text-white">

            <form

                onSubmit={handleSubmit}

                className="bg-[#111] p-10 rounded-3xl w-[400px]"

            >

                <h1 className="text-4xl font-bold mb-8 text-center">

                    CREATE <span className="text-orange-500">ACCOUNT</span>

                </h1>

                <div className="space-y-5">

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-gray-200 text-black"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-gray-200 text-black"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-[#1a1a1a]"
                    />

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold"
                    >

                        Register

                    </button>

                </div>

            </form>

        </section>

    )
}

export default Register
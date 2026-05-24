import { useState } from "react"

import axios from "axios"

function Profile() {

    const storedUser = JSON.parse(

        localStorage.getItem("user")

    )

    const [user, setUser] = useState({

        ...storedUser

    })

    // HANDLE INPUT CHANGE
    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        })

    }

    // HANDLE IMAGE
    const handleImageChange = (e) => {

        const file = e.target.files[0]

        if (!file) return

        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onloadend = () => {

            setUser({

                ...user,

                image: reader.result

            })

        }

    }

    // SAVE PROFILE
    const handleSave = async () => {

        try {

            // SAVE LOCAL
            localStorage.setItem(

                "user",

                JSON.stringify(user)

            )

            // SAVE DATABASE
            await axios.put(

                "http://localhost:5000/api/user/update-profile",

                user

            )

            alert("Profile Updated Successfully 😄🔥")

        }

        catch (error) {

            console.log(error)

            alert("Failed To Update Profile")

        }

    }

    return (

        <div className="min-h-screen bg-black text-white px-4 py-10">

            <div className="max-w-3xl mx-auto bg-[#111111] p-8 rounded-3xl border border-orange-500">

                <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center">

                    My Profile

                </h1>

                {/* IMAGE */}
                {/* IMAGE */}
                <div className="flex flex-col items-center mb-8">

                    <img
                        src={
                            user.image
                                ? user.image
                                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        }
                        alt="Profile"
                        className="w-40 h-40 rounded-full object-cover border-4 border-orange-500"
                    />

                    <label className="mt-5 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl cursor-pointer font-bold duration-300">

                        Upload Photo

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />

                    </label>

                </div>

                {/* NAME */}
                <div className="mb-5">

                    <label className="block mb-2 text-lg">

                        Name

                    </label>

                    <input
                        type="text"
                        name="name"
                        value={user.name || ""}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                    />

                </div>

                {/* EMAIL */}
                <div className="mb-5">

                    <label className="block mb-2 text-lg">

                        Email

                    </label>

                    <input
                        type="email"
                        name="email"
                        value={user.email || ""}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                    />

                </div>

                {/* AGE */}
                <div className="mb-5">

                    <label className="block mb-2 text-lg">

                        Age

                    </label>

                    <input
                        type="number"
                        name="age"
                        value={user.age || ""}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                    />

                </div>

                {/* GENDER */}
                <div className="mb-5">

                    <label className="block mb-2 text-lg">

                        Gender

                    </label>

                    <select
                        name="gender"
                        value={user.gender || ""}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                    >

                        <option value="">

                            Select Gender

                        </option>

                        <option value="Male">

                            Male

                        </option>

                        <option value="Female">

                            Female

                        </option>

                    </select>

                </div>

                {/* GOAL */}
                <div className="mb-8">

                    <label className="block mb-2 text-lg">

                        Fitness Goal

                    </label>

                    <input
                        type="text"
                        name="goal"
                        value={user.goal || ""}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                    />

                </div>

                {/* BUTTON */}
                <button
                    onClick={handleSave}
                    className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl text-lg font-bold duration-300"
                >

                    Save Profile

                </button>

            </div>

        </div>

    )

}

export default Profile
import { useEffect, useState } from "react"

import axios from "axios"

function Admin() {

    const [users, setUsers] = useState([])

    const [messages, setMessages] = useState([])

    // Fetch Data
    useEffect(() => {

        fetchUsers()

        fetchMessages()

    }, [])

    // Fetch Users
    const fetchUsers = async () => {

        try {

            const res = await axios.get(

                "http://localhost:5000/api/admin/users"

            )

            setUsers(res.data)

        }

        catch (error) {

            console.log(error)

        }

    }

    // Fetch Messages
    const fetchMessages = async () => {

        try {

            const res = await axios.get(

                "http://localhost:5000/api/admin/messages"

            )

            setMessages(res.data)

        }

        catch (error) {

            console.log(error)

        }

    }

    return (

        <div className="min-h-screen bg-black text-white p-6">

            <h1 className="text-5xl font-bold text-orange-500 mb-10">

                Admin Dashboard

            </h1>

            {/* USERS */}
            <div className="mb-16">

                <h2 className="text-3xl font-bold mb-6">

                    All Users

                </h2>

                <div className="overflow-x-auto">

                    <table className="w-full border border-gray-700">

                        <thead className="bg-orange-500 text-black">

                            <tr>

                                <th className="p-4">

                                    Name

                                </th>

                                <th className="p-4">

                                    Email

                                </th>

                                <th className="p-4">

                                    Age

                                </th>

                                <th className="p-4">

                                    Gender

                                </th>

                                <th className="p-4">

                                    Goal

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                users.map((user) => (

                                    <tr
                                        key={user._id}
                                        className="text-center border-b border-gray-700"
                                    >

                                        <td className="p-4">

                                            {user.name}

                                        </td>

                                        <td className="p-4">

                                            {user.email}

                                        </td>

                                        <td className="p-4">

                                            {user.age}

                                        </td>

                                        <td className="p-4">

                                            {user.gender}

                                        </td>

                                        <td className="p-4">

                                            {user.goal}

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

            {/* CONTACT MESSAGES */}
            <div>

                <h2 className="text-3xl font-bold mb-6">

                    Contact Messages

                </h2>

                <div className="grid gap-6">

                    {

                        messages.map((msg) => (

                            <div
                                key={msg._id}
                                className="bg-[#111111] border border-orange-500 rounded-2xl p-6"
                            >

                                <h3 className="text-2xl font-bold text-orange-500 mb-2">

                                    {msg.name}

                                </h3>

                                <p className="text-gray-400 mb-3">

                                    {msg.email}

                                </p>

                                <p className="text-lg">

                                    {msg.message}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </div>

    )

}

export default Admin
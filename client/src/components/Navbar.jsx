import { useState } from "react"

import {

    Link,

    useNavigate

} from "react-router-dom"

function Navbar() {

    const navigate = useNavigate()

    const [menuOpen, setMenuOpen] = useState(false)

    // SAFE USER FETCH
    let user = null

    try {

        const storedUser = localStorage.getItem("user")

        if (

            storedUser &&

            storedUser !== "undefined"

        ) {

            user = JSON.parse(storedUser)

        }

    }

    catch (error) {

        console.log("Invalid user data")

    }

    // LOGOUT
    const handleLogout = () => {

        localStorage.removeItem("user")

        navigate("/login")

    }

    return (

        <nav className="bg-black text-white border-b border-gray-800">

            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                {/* LOGO */}
                <Link
                    to="/"
                    className="text-3xl font-bold text-orange-500"
                >

                    FitZon Pro

                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-6 text-lg">

                    <Link to="/">Home</Link>

                    <Link to="/dashboard">Dashboard</Link>

                    <Link to="/pricing">Pricing</Link>

                    <Link to="/contact">Contact</Link>

                    <Link to="/profile">Profile</Link>

                    {

                        user?.isAdmin && (

                            <Link to="/admin">

                                Admin

                            </Link>

                        )

                    }

                    {

                        user && (

                            <p className="text-orange-500 font-bold">

                                Hello,

                                {" "}

                                {user.name} 👋

                            </p>

                        )

                    }

                    {

                        user ? (

                            <button
                                onClick={handleLogout}
                                className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl font-bold"
                            >

                                Logout

                            </button>

                        ) : (

                            <Link
                                to="/login"
                                className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl font-bold"
                            >

                                Login

                            </Link>

                        )

                    }

                </div>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {

                        menuOpen ? "✖" : "☰"

                    }

                </button>

            </div>

            {/* MOBILE MENU */}
            {

                menuOpen && (

                    <div className="md:hidden bg-[#111111] px-6 py-6 flex flex-col gap-5 text-lg border-t border-gray-700">

                        <Link to="/">Home</Link>

                        <Link to="/dashboard">Dashboard</Link>

                        <Link to="/pricing">Pricing</Link>

                        <Link to="/contact">Contact</Link>

                        <Link to="/profile">Profile</Link>

                        {

                            user?.isAdmin && (

                                <Link to="/admin">

                                    Admin

                                </Link>

                            )

                        }

                        {

                            user && (

                                <p className="text-orange-500 font-bold">

                                    Hello,

                                    {" "}

                                    {user.name} 👋

                                </p>

                            )

                        }

                        {

                            user ? (

                                <button
                                    onClick={handleLogout}
                                    className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-bold"
                                >

                                    Logout

                                </button>

                            ) : (

                                <Link
                                    to="/login"
                                    className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-bold text-center"
                                >

                                    Login

                                </Link>

                            )

                        }

                    </div>

                )

            }

        </nav>

    )

}

export default Navbar
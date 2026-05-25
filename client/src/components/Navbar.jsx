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

        <nav className="bg-black text-white border-b border-gray-800 sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                {/* LOGO */}
                <Link
                    to="/"
                    className="text-3xl font-bold text-orange-500"
                >

                    FitZone Pro

                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-6 text-lg">

                    <a
                        href="/"
                        className="hover:text-orange-500 duration-300"
                    >

                        Home

                    </a>

                    <a
                        href="#pricing"
                        className="hover:text-orange-500 duration-300"
                    >

                        Pricing

                    </a>

                    <Link
                        to="/dashboard"
                        className="hover:text-orange-500 duration-300"
                    >

                        Dashboard

                    </Link>

                    <Link
                        to="/contact"
                        className="hover:text-orange-500 duration-300"
                    >

                        Contact

                    </Link>

                    <Link
                        to="/profile"
                        className="hover:text-orange-500 duration-300"
                    >

                        Profile

                    </Link>

                    {
                        user?.isAdmin && (

                            <Link
                                to="/admin"
                                className="hover:text-orange-500 duration-300"
                            >

                                Admin

                            </Link>

                        )

                    }

                    {
                        user && (

                            <p className="text-orange-500 font-bold">

                                Hello {user.name} 👋

                            </p>

                        )

                    }

                    {
                        user ? (

                            <button
                                onClick={handleLogout}
                                className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl font-bold duration-300"
                            >

                                Logout

                            </button>

                        ) : (

                            <Link
                                to="/login"
                                className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl font-bold duration-300"
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

                        <a
                            href="/"
                            onClick={() => setMenuOpen(false)}
                        >

                            Home

                        </a>

                        <a
                            href="#pricing"
                            onClick={() => setMenuOpen(false)}
                        >

                            Pricing

                        </a>

                        <Link
                            to="/dashboard"
                            onClick={() => setMenuOpen(false)}
                        >

                            Dashboard

                        </Link>

                        <Link
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                        >

                            Contact

                        </Link>

                        <Link
                            to="/profile"
                            onClick={() => setMenuOpen(false)}
                        >

                            Profile

                        </Link>

                        {
                            user?.isAdmin && (

                                <Link
                                    to="/admin"
                                    onClick={() => setMenuOpen(false)}
                                >

                                    Admin

                                </Link>

                            )

                        }

                        {
                            user && (

                                <p className="text-orange-500 font-bold">

                                    Hello {user.name} 👋

                                </p>

                            )

                        }

                        {
                            user ? (

                                <button
                                    onClick={handleLogout}
                                    className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-bold duration-300"
                                >

                                    Logout

                                </button>

                            ) : (

                                <Link
                                    to="/login"
                                    className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-bold text-center duration-300"
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
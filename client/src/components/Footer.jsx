import {

    FaInstagram,

    FaFacebook,

    FaLinkedin,

    FaYoutube,

    FaTwitter

} from "react-icons/fa"

function Footer() {

    return (

        <footer className="bg-black text-white border-t border-gray-800 py-10 mt-20">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold text-orange-500">

                    FitZone Pro

                </h2>

                <p className="text-gray-400 mt-3">

                    Transform Your Body & Lifestyle 🚀

                </p>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center gap-6 mt-6 text-3xl">

                    <a
                        href="https://www.instagram.com/arizmondal9?igsh=MWQyZGU4aXQ5MWF0ag=="
                        target="_blank"
                        className="hover:text-orange-500 duration-300"
                    >

                        <FaInstagram />

                    </a>

                    <a
                        href="https://www.facebook.com/share/1DSoJTULq3/"
                        target="_blank"
                        className="hover:text-orange-500 duration-300"
                    >

                        <FaFacebook />

                    </a>

                    <a
                        href="https://www.linkedin.com/in/ariz-mondal-b4243a3b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        className="hover:text-orange-500 duration-300"
                    >

                        <FaLinkedin />

                    </a>

                    <a
                        href="https://x.com/arizM2006/"
                        target="_blank"
                        className="hover:text-orange-500 duration-300"
                    >

                        <FaTwitter />

                    </a>

                    <a
                        href="https://youtube.com/"
                        target="_blank"
                        className="hover:text-orange-500 duration-300"
                    >

                        <FaYoutube />

                    </a>

                </div>

                <p className="text-gray-500 mt-6 text-sm">

                    FitZone Pro. All Rights Reserved.

                </p>

            </div>

        </footer>

    )

}

export default Footer
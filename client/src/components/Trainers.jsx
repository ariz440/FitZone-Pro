import trainer1 from "../assets/images/trainer1.jpg"
import trainer2 from "../assets/images/trainer2.jpg"
import trainer3 from "../assets/images/trainer3.jpg"
import trainer4 from "../assets/images/trainer4.jpg"

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter
} from "react-icons/fa"

function Trainers() {

    const trainers = [

        {
            id: 1,
            image: trainer1,
            name: "Sher Khan Gymwala",
            role: "Bodybuilding Coach",

            facebook: "",
            instagram: "",
            twitter: ""
        },

        {
            id: 2,
            image: trainer2,
            name: "Tiger Tiwari",
            role: "Fitness Trainer",

            facebook: "",
            instagram: "",
            twitter: ""
        },

        {
            id: 3,
            image: trainer3,
            name: "Dogesh Gym Boy",
            role: "CrossFit Expert",

            facebook: "",
            instagram: "",
            twitter: ""
        },

        {
            id: 4,
            image: trainer4,
            name: "Billa Gymson (Biral Bhai)",
            role: "Yoga Instructor",

            facebook: "",
            instagram: "",
            twitter: ""
        }

    ]

    return (

        <section className="py-24 px-5 bg-black text-white">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold">
                        OUR <span className="text-orange-500">TRAINERS</span>
                    </h2>

                    <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">

                        Meet our professional trainers who will help
                        you achieve your dream fitness goals.

                    </p>

                </div>

                {/* Trainer Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {
                        trainers.map((trainer) => (

                            <div
                                key={trainer.id}
                                className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500 duration-300 group"
                            >

                                {/* Image */}
                                <div className="overflow-hidden">

                                    <img
                                        src={trainer.image}
                                        alt={trainer.name}
                                        className="w-full h-[350px] object-cover group-hover:scale-110 duration-500"
                                    />

                                </div>

                                {/* Content */}
                                <div className="p-6 text-center">

                                    <h3 className="text-2xl font-bold">
                                        {trainer.name}
                                    </h3>

                                    <p className="text-orange-500 mt-2">
                                        {trainer.role}
                                    </p>

                                    {/* Social Icons */}
                                    <div className="flex justify-center gap-4 mt-5">

                                        <a
                                            href={trainer.facebook}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="bg-black p-3 rounded-full hover:bg-orange-500 duration-300"
                                        >
                                            <FaFacebookF />
                                        </a>

                                        <a
                                            href={trainer.instagram}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="bg-black p-3 rounded-full hover:bg-orange-500 duration-300"
                                        >
                                            <FaInstagram />
                                        </a>

                                        <a
                                            href={trainer.twitter}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="bg-black p-3 rounded-full hover:bg-orange-500 duration-300"
                                        >
                                            <FaTwitter />
                                        </a>

                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    )
}

export default Trainers
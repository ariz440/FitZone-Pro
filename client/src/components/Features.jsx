import {
    FaDumbbell,
    FaHeartbeat,
    FaFire,
    FaUserFriends
} from "react-icons/fa"

function Features() {

    const features = [

        {
            icon: <FaDumbbell />,
            title: "Modern Equipment",
            desc: "Train with advanced gym machines and premium equipment."
        },

        {
            icon: <FaHeartbeat />,
            title: "Healthy Lifestyle",
            desc: "Improve your fitness and health with expert guidance."
        },

        {
            icon: <FaFire />,
            title: "Fat Burn",
            desc: "Professional workout plans for fast body transformation."
        },

        {
            icon: <FaUserFriends />,
            title: "Expert Trainers",
            desc: "Certified trainers to help you achieve your goals."
        }

    ]

    return (

        <section className="py-24 px-5 bg-[#111111]">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold">

                        WHY CHOOSE <span className="text-orange-500">US</span>

                    </h2>

                    <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">

                        We provide everything you need to build
                        your dream physique and healthy lifestyle.

                    </p>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {
                        features.map((item, index) => (

                            <div
                                key={index}
                                className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-orange-500 duration-300 hover:-translate-y-2"
                            >

                                <div className="text-5xl text-orange-500 mb-6">

                                    {item.icon}

                                </div>

                                <h3 className="text-2xl font-bold mb-4">

                                    {item.title}

                                </h3>

                                <p className="text-gray-400 leading-7">

                                    {item.desc}

                                </p>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    )
}

export default Features
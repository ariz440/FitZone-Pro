import { motion } from "framer-motion"

function Hero() {

    return (

        <section className="min-h-screen flex flex-col justify-center items-center text-center px-5 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-[400px] h-[400px] bg-orange-500 opacity-20 blur-[120px] rounded-full top-20"></div>

            {/* Content */}
            <motion.h2

                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}

                className="text-5xl md:text-7xl font-extrabold leading-tight z-10"
            >

                BUILD YOUR <br />

                <span className="text-orange-500">
                    DREAM BODY
                </span>

            </motion.h2>

            <motion.p

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}

                className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl z-10"
            >

                Push your limits with professional trainers,
                powerful workouts, and modern fitness programs.

            </motion.p>

            <motion.button

                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}

                className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-lg font-semibold mt-10 duration-300 z-10"
            >

                Start Training

            </motion.button>

        </section>

    )
}

export default Hero
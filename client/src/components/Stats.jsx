function Stats() {

    return (

        <section className="py-20 px-5 bg-[#111111]">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                {/* Card 1 */}
                <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-gray-800 hover:border-orange-500 duration-300">

                    <h2 className="text-5xl font-bold text-orange-500">
                        10+
                    </h2>

                    <p className="text-gray-400 mt-4 text-lg">
                        Years Experience
                    </p>

                </div>

                {/* Card 2 */}
                <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-gray-800 hover:border-orange-500 duration-300">

                    <h2 className="text-5xl font-bold text-orange-500">
                        5K+
                    </h2>

                    <p className="text-gray-400 mt-4 text-lg">
                        Active Members
                    </p>

                </div>

                {/* Card 3 */}
                <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-gray-800 hover:border-orange-500 duration-300">

                    <h2 className="text-5xl font-bold text-orange-500">
                        50+
                    </h2>

                    <p className="text-gray-400 mt-4 text-lg">
                        Expert Trainers
                    </p>

                </div>

            </div>

        </section>

    )
}

export default Stats
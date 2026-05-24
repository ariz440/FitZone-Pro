import { useState } from "react"

function BMI() {

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmi, setBmi] = useState(null)
    const [status, setStatus] = useState("")

    const calculateBMI = () => {

        if (!height || !weight) {
            alert("Please enter height and weight")
            return
        }

        const heightInMeter = height / 100

        const result = (
            weight / (heightInMeter * heightInMeter)
        ).toFixed(1)

        setBmi(result)

        if (result < 18.5) {
            setStatus("Underweight")
        }

        else if (result >= 18.5 && result < 25) {
            setStatus("Normal Weight")
        }

        else if (result >= 25 && result < 30) {
            setStatus("Overweight")
        }

        else {
            setStatus("Obese")
        }

    }

    return (

        <section className="py-16 px-5 bg-black">

            <div className="max-w-3xl mx-auto bg-[#111111] rounded-3xl p-8 border border-gray-800">

                {/* Heading */}
                <div className="text-center mb-8">

                    <h2 className="text-3xl md:text-4xl font-bold">

                        BMI <span className="text-orange-500">CALCULATOR</span>

                    </h2>

                    <p className="text-gray-400 mt-5 text-lg">

                        Calculate your Body Mass Index instantly.

                    </p>

                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <input
                        type="number"
                        placeholder="Enter Height (cm)"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-5 py-3 text-white outline-none focus:border-orange-500"
                    />

                    <input
                        type="number"
                        placeholder="Enter Weight (kg)"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
                    />

                </div>

                {/* Button */}
                <div className="text-center mt-7">

                    <button
                        onClick={calculateBMI}
                        className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-base font-semibold duration-300"
                    >

                        Calculate BMI

                    </button>

                </div>

                {/* Result */}
                {
                    bmi && (

                        <div className="text-center mt-8">

                            <h3 className="text-5xl font-bold text-orange-500">

                                {bmi}

                            </h3>

                            <p className="text-2xl mt-4 text-gray-300">

                                {status}

                            </p>

                        </div>

                    )
                }

            </div>

        </section>

    )
}

export default BMI
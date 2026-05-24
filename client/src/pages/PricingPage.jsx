import { useState } from "react"

function PricingPage() {

    const [showPayment, setShowPayment] = useState(false)

    const [paymentSuccess, setPaymentSuccess] = useState(false)

    return (

        <div className="bg-black min-h-screen text-white px-6 py-16">

            {/* Heading */}
            <div className="text-center mb-16">

                <h1 className="text-5xl md:text-6xl font-bold mb-5">

                    Our

                    <span className="text-orange-500">

                        {" "}Pricing

                    </span>

                </h1>

                <p className="text-gray-400 text-lg">

                    Choose your perfect fitness plan

                </p>

            </div>

            {/* Pricing Cards */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

                {/* Basic */}
                <div className="bg-[#111111] p-10 rounded-3xl border border-gray-800">

                    <h2 className="text-3xl font-bold mb-4">

                        Basic

                    </h2>

                    <h1 className="text-5xl font-bold text-orange-500 mb-6">

                        ₹199

                    </h1>

                    <ul className="space-y-4 text-gray-300 mb-8">

                        <li>✔ Gym Access</li>

                        <li>✔ Basic Workout Plan</li>

                        <li>✔ Community Support</li>

                    </ul>

                    <button
                        onClick={() => setShowPayment(true)}
                        className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl text-lg font-bold duration-300"
                    >

                        Buy Now

                    </button>

                </div>

                {/* Premium */}
                <div className="bg-[#111111] border-2 border-orange-500 p-10 rounded-3xl scale-105 shadow-2xl">

                    <h2 className="text-3xl font-bold mb-4">

                        Premium

                    </h2>

                    <h1 className="text-5xl font-bold text-orange-500 mb-6">

                        ₹499

                    </h1>

                    <ul className="space-y-4 text-gray-300 mb-8">

                        <li>✔ All Basic Features</li>

                        <li>✔ Personal Trainer</li>

                        <li>✔ Diet Plan</li>

                        <li>✔ Premium Support</li>

                    </ul>

                    <button
                        onClick={() => setShowPayment(true)}
                        className="w-full bg-orange-500 text-white hover:bg-orange-600 py-4 rounded-2xl text-lg font-bold duration-300"
                    >

                        Buy Premium

                    </button>

                </div>

                {/* Pro */}
                <div className="bg-[#111111] p-10 rounded-3xl border border-gray-800">

                    <h2 className="text-3xl font-bold mb-4">

                        Pro

                    </h2>

                    <h1 className="text-5xl font-bold text-orange-500 mb-6">

                        ₹999

                    </h1>

                    <ul className="space-y-4 text-gray-300 mb-8">

                        <li>✔ All Premium Features</li>

                        <li>✔ 1-on-1 Coaching</li>

                        <li>✔ Advanced Analytics</li>

                        <li>✔ Priority Support</li>

                    </ul>

                    <button
                        onClick={() => setShowPayment(true)}
                        className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl text-lg font-bold duration-300"
                    >

                        Buy Pro

                    </button>

                </div>

            </div>

            {/* PAYMENT MODAL */}
            {

                showPayment && (

                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

                        <div className="bg-[#111111] rounded-3xl p-8 max-w-md w-full text-center relative border border-gray-700">

                            {/* Close */}
                            <button
                                onClick={() => setShowPayment(false)}
                                className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
                            >

                                ✕

                            </button>

                            <h2 className="text-3xl font-bold text-orange-500 mb-6">

                                Scan & Pay

                            </h2>

                            {/* QR IMAGE */}
                            <img
                                src="/payment.png"
                                alt="QR Code"
                                className="w-72 h-72 mx-auto rounded-2xl mb-6 border-4 border-white"
                            />

                            <p className="text-gray-300 text-lg">

                                Scan using PhonePe / GPay / Paytm

                            </p>

                            <p className="text-orange-500 font-bold text-2xl mt-4">

                                Secure Payment 🔒

                            </p>

                            {/* PAID BUTTON */}
                            <button
                                onClick={() => {

                                    setPaymentSuccess(true)

                                    setShowPayment(false)

                                }}
                                className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl text-lg font-bold"
                            >

                                I Have Paid ✅

                            </button>

                        </div>

                    </div>

                )

            }

            {/* SUCCESS MODAL */}
            {

                paymentSuccess && (

                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

                        <div className="bg-[#111111] border border-orange-500 rounded-3xl p-10 text-center max-w-md w-full">

                            <h1 className="text-6xl mb-5">

                                🎉

                            </h1>

                            <h2 className="text-3xl font-bold text-orange-500 mb-4">

                                Payment Successful

                            </h2>

                            <p className="text-gray-300 text-lg mb-8">

                                Your premium membership is now activated 😄🔥

                            </p>

                            <button
                                onClick={() => setPaymentSuccess(false)}
                                className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-bold text-lg"
                            >

                                Continue

                            </button>

                        </div>

                    </div>

                )

            }

        </div>

    )

}

export default PricingPage
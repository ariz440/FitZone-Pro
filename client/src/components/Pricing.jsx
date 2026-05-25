import {
  FaCheck
} from "react-icons/fa"

import {
  useState
} from "react"

function Pricing() {

  const [showQR, setShowQR] = useState(false)

  const plans = [

    {
      name: "Basic",
      price: "₹1999",
      features: [
        "Gym Access",
        "Cardio Training",
        "Locker Facility",
        "Free WiFi"
      ]
    },

    {
      name: "Standard",
      price: "₹3999",
      features: [
        "All Basic Features",
        "Personal Trainer",
        "Diet Plan",
        "Group Classes"
      ]
    },

    {
      name: "Premium",
      price: "₹6999",
      features: [
        "All Standard Features",
        "24/7 Access",
        "VIP Support",
        "Premium Equipment"
      ]
    }

  ]

  return (

    <section
      id="pricing"
      className="py-24 px-5 bg-[#111111] relative"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            PRICING <span className="text-orange-500">PLANS</span>

          </h2>

          <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">

            Choose the perfect pricing plan
            according to your fitness goals.

          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {
            plans.map((plan, index) => (

              <div
                key={index}
                className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-10 hover:border-orange-500 duration-300 hover:-translate-y-2 shadow-xl"
              >

                <h3 className="text-3xl font-bold mb-5 text-white">

                  {plan.name}

                </h3>

                <h1 className="text-6xl font-extrabold text-orange-500 mb-8">

                  {plan.price}

                  <span className="text-xl text-gray-400">
                    /month
                  </span>

                </h1>

                {/* Features */}
                <div className="space-y-5">

                  {
                    plan.features.map((feature, i) => (

                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >

                        <FaCheck className="text-orange-500" />

                        <p className="text-gray-300">
                          {feature}
                        </p>

                      </div>

                    ))
                  }

                </div>

                {/* Button */}
                <button
                  onClick={() => setShowQR(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-full text-lg font-semibold mt-10 duration-300 text-white"
                >

                  Choose Plan

                </button>

              </div>

            ))
          }

        </div>

      </div>

      {/* QR POPUP */}
      {
        showQR && (

          <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 px-4">

            <div className="bg-[#1a1a1a] p-8 rounded-3xl text-center max-w-md w-full border border-orange-500 relative">

              {/* Close Button */}
              <button
                onClick={() => setShowQR(false)}
                className="absolute top-4 right-5 text-white text-3xl hover:text-orange-500"
              >

                ×

              </button>

              <h2 className="text-3xl font-bold text-orange-500 mb-6">

                Scan & Pay

              </h2>

              <img
                src="/payment.png"
                alt="QR Code"
                className="w-72 mx-auto rounded-2xl border-4 border-orange-500"
              />

              <p className="text-gray-400 mt-6 text-lg">

                Scan this QR code using
                PhonePe, Google Pay, Paytm or any UPI app.

              </p>

            </div>

          </div>

        )

      }

    </section>

  )
}

export default Pricing
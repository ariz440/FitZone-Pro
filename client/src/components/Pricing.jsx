import {
  FaCheck
} from "react-icons/fa"

function Pricing() {

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
      className="py-24 px-5 bg-[#111111]"
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
                <button className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-full text-lg font-semibold mt-10 duration-300 text-white">

                  Choose Plan

                </button>

              </div>

            ))
          }

        </div>

      </div>

    </section>

  )
}

export default Pricing
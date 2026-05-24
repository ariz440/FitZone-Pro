import { useEffect, useState } from "react"

function Dashboard() {

  // Safe User Parse
  const userData = localStorage.getItem("user")

  const user = userData

    ? JSON.parse(userData)

    : null

  // Inputs
  const [weight, setWeight] = useState(70)

  const [height, setHeight] = useState(176)

  const [duration, setDuration] = useState(45)

  const [workoutType, setWorkoutType] = useState("Cardio")

  const [workoutName, setWorkoutName] = useState("")

  // Results
  const [bmi, setBmi] = useState(0)

  const [bmiStatus, setBmiStatus] = useState("")

  const [calories, setCalories] = useState(0)

  const [progress, setProgress] = useState(0)

  // Workout History
  const [workouts, setWorkouts] = useState([])

  // Auto Calculate
  useEffect(() => {

    const heightInMeter = height / 100

    const bmiValue = (
      weight /
      (heightInMeter * heightInMeter)
    ).toFixed(1)

    setBmi(bmiValue)

    if (bmiValue < 18.5) {

      setBmiStatus("Underweight")

    }

    else if (bmiValue < 25) {

      setBmiStatus("Healthy Weight")

    }

    else if (bmiValue < 30) {

      setBmiStatus("Overweight")

    }

    else {

      setBmiStatus("Obese")

    }

    // Calories
    let calorieRate = 6

    if (workoutType === "Cardio") {

      calorieRate = 8

    }

    else if (workoutType === "Strength") {

      calorieRate = 6

    }

    else if (workoutType === "HIIT") {

      calorieRate = 12

    }

    else if (workoutType === "Yoga") {

      calorieRate = 4

    }

    const burned = duration * calorieRate

    setCalories(burned)

    // Progress
    const prog = Math.min(
      (duration / 60) * 100,
      100
    )

    setProgress(prog)

  },

    [

      weight,
      height,
      duration,
      workoutType

    ])

  // Load Workouts
  useEffect(() => {

    const savedWorkouts = JSON.parse(

      localStorage.getItem("workouts")

    )

    if (savedWorkouts) {

      setWorkouts(savedWorkouts)

    }

  }, [])

  // Add Workout
  const addWorkout = () => {

    if (

      !workoutName ||

      !duration

    ) {

      return alert(
        "Please fill all fields"
      )

    }

    const newWorkout = {

      id: Date.now(),

      workoutName,

      workoutType,

      duration,

      calories,

      date: new Date().toLocaleDateString(),

      time: new Date().toLocaleTimeString()

    }

    const updatedWorkouts = [

      newWorkout,
      ...workouts

    ]

    setWorkouts(updatedWorkouts)

    localStorage.setItem(

      "workouts",

      JSON.stringify(updatedWorkouts)

    )

    setWorkoutName("")

    alert("Workout Added 🔥")

  }

  // Delete Workout
  const deleteWorkout = (id) => {

    const filtered = workouts.filter(

      (workout) =>

        workout.id !== id

    )

    setWorkouts(filtered)

    localStorage.setItem(

      "workouts",

      JSON.stringify(filtered)

    )

  }

  return (

    <div className="bg-black min-h-screen text-white p-8">

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold">

          Welcome,

          <span className="text-orange-500">

            {" "}

            {user?.name || "User"}

          </span>

          👋

        </h1>

        <p className="text-gray-400 mt-3 text-lg">

          Track your fitness journey with FitZone Pro

        </p>

      </div>

      {/* Calculator */}
      <div className="bg-[#111111] p-8 rounded-3xl border border-gray-800 mb-10">

        <h2 className="text-3xl font-bold text-orange-500 mb-8">

          Fitness Calculator

        </h2>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5">

          <div>

            <label className="text-gray-400">

              Weight (kg)

            </label>

            <input
              type="number"
              value={weight}
              onChange={(e) =>
                setWeight(Number(e.target.value))
              }
              className="w-full mt-2 bg-black border border-gray-700 rounded-xl p-3"
            />

          </div>

          <div>

            <label className="text-gray-400">

              Height (cm)

            </label>

            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(Number(e.target.value))
              }
              className="w-full mt-2 bg-black border border-gray-700 rounded-xl p-3"
            />

          </div>

          <div>

            <label className="text-gray-400">

              Duration (min)

            </label>

            <input
              type="number"
              value={duration}
              onChange={(e) =>
                setDuration(Number(e.target.value))
              }
              className="w-full mt-2 bg-black border border-gray-700 rounded-xl p-3"
            />

          </div>

          <div>

            <label className="text-gray-400">

              Workout Type

            </label>

            <select
              value={workoutType}
              onChange={(e) =>
                setWorkoutType(e.target.value)
              }
              className="w-full mt-2 bg-black border border-gray-700 rounded-xl p-3"
            >

              <option>Cardio</option>

              <option>Strength</option>

              <option>HIIT</option>

              <option>Yoga</option>

            </select>

          </div>

          <div>

            <label className="text-gray-400">

              Workout Name

            </label>

            <input
              type="text"
              value={workoutName}
              onChange={(e) =>
                setWorkoutName(e.target.value)
              }
              placeholder="Push Day"
              className="w-full mt-2 bg-black border border-gray-700 rounded-xl p-3"
            />

          </div>

        </div>

        <button
          onClick={addWorkout}
          className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-bold duration-300"
        >

          Add Workout

        </button>

      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        <div className="bg-[#111111] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-3xl font-bold text-orange-500 mb-6">

            BMI Status

          </h2>

          <h1 className="text-7xl font-bold">

            {bmi}

          </h1>

          <p className="text-2xl text-green-400 mt-4">

            {bmiStatus}

          </p>

        </div>

        <div className="bg-[#111111] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-3xl font-bold text-orange-500 mb-6">

            Calories Burned

          </h2>

          <h1 className="text-7xl font-bold">

            {calories}

          </h1>

          <p className="text-gray-400 mt-4 text-2xl">

            kcal burned

          </p>

        </div>

        <div className="bg-[#111111] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-3xl font-bold text-orange-500 mb-6">

            Workout Progress

          </h2>

          <div className="flex justify-between mb-3">

            <span>Daily Goal</span>

            <span>

              {progress.toFixed(0)}%

            </span>

          </div>

          <div className="w-full h-5 bg-gray-800 rounded-full">

            <div
              className="h-5 bg-orange-500 rounded-full"
              style={{
                width: `${progress}%`
              }}
            ></div>

          </div>

        </div>

      </div>

      {/* Workout History */}
      <div className="mt-16">

        <h2 className="text-4xl font-bold text-orange-500 mb-8">

          Workout History

        </h2>

        {

          workouts.length === 0

            ? (

              <div className="bg-[#111111] p-10 rounded-3xl text-center text-gray-400">

                No workouts added yet.

              </div>

            )

            : (

              <div className="grid md:grid-cols-2 gap-6">

                {

                  workouts.map((workout) => (

                    <div
                      key={workout.id}
                      className="bg-[#111111] border border-gray-800 p-6 rounded-3xl"
                    >

                      <div className="flex justify-between items-start">

                        <div>

                          <h3 className="text-2xl font-bold mb-3">

                            {workout.workoutName}

                          </h3>

                          <p className="text-gray-400 mb-2">

                            Type:

                            <span className="text-white">

                              {" "}

                              {workout.workoutType}

                            </span>

                          </p>

                          <p className="text-gray-400 mb-2">

                            Duration:

                            <span className="text-white">

                              {" "}

                              {workout.duration} min

                            </span>

                          </p>

                          <p className="text-gray-400 mb-2">

                            Calories:

                            <span className="text-orange-500">

                              {" "}

                              {workout.calories} kcal

                            </span>

                          </p>

                        </div>

                        <button
                          onClick={() =>
                            deleteWorkout(workout.id)
                          }
                          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl font-bold"
                        >

                          Delete

                        </button>

                      </div>

                    </div>

                  ))

                }

              </div>

            )

        }

      </div>

    </div>

  )

}

export default Dashboard
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import About from "./pages/About"
import TrainersPage from "./pages/TrainersPage"
import PricingPage from "./pages/PricingPage"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Admin from "./pages/Admin"
function App() {

  return (

    <BrowserRouter>

      <div className="bg-black text-white overflow-x-hidden">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/trainers" element={<TrainersPage />} />

          <Route path="/pricing" element={<PricingPage />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route

            path="/dashboard"

            element={

              <ProtectedRoute>

                <Dashboard />

              </ProtectedRoute>

            }

          />
        </Routes>

        <Footer />

      </div>

    </BrowserRouter>

  )
}

export default App
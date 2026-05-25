import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {

    const user = localStorage.getItem("user")

    // USER NA THAKLE LOGIN
    if (!user || user === "undefined") {

        return <Navigate to="/login" />

    }

    // USER THAKLE DASHBOARD SHOW
    return children

}

export default ProtectedRoute
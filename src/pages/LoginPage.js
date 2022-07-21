import React from "react"
import "./LoginPage.css"
import Login from "../components/Login"

const LoginPage = () => {
    return (
        <div>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-6 col-xl-4 offset-xl-1" id="login-column">
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
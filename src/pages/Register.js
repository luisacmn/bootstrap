import React from "react"
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-6 col-xl-4 offset-xl-1" id="login-column">
                            <form id="login-form">
    
                                <div className="form-outline mb-4">
                                    <input 
                                        type="text" 
                                        id="form3Example3" 
                                        className="form-control form-control-lg"
                                        placeholder="Name" 
                                    />
                                </div>
                                
                                <div className="form-outline mb-4">
                                    <input 
                                        type="email" 
                                        id="form3Example3" 
                                        className="form-control form-control-lg"
                                        placeholder="Email address" 
                                    />
                                </div>
                            
                                <div className="form-outline mb-3">
                                    <input 
                                        type="password" 
                                        id="form3Example4" 
                                        className="form-control form-control-lg"
                                        placeholder="Password" 
                                    />
                                </div>

                                <div className="form-outline mb-3">
                                    <input 
                                        type="password" 
                                        id="form3Example4" 
                                        className="form-control form-control-lg"
                                        placeholder="Confirm Password" 
                                    />
                                </div>

                                <div>
                                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                                    <p>Already have an account? <Link to="/login" className="link-danger">Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Register;
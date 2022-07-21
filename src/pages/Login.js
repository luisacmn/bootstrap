import React from "react"
import {Link} from "react-router-dom"
import {FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-12 col-xl-4 offset-xl-1" id="login-column">
                            <form id="login-form">
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1"><FaFacebookF/></button>                    {/*Instalar pacote npm de ícones */}
                                    <button type="button" className="btn btn-primary btn-floating mx-1"><FaTwitter/></button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1"><FaLinkedinIn/></button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Email address" />
                                </div>
                            
                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Password" />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">Remember me</label>
                                    </div>
                                    <Link to="#!" className="forgot-password">Forgot password?</Link>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg">Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="#!" className="link-danger">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Login;
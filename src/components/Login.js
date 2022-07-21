import React, { useEffect, useRef, useState } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import PrivatePage from "../pages/PrivatePage"


const Login = () => { 

    const userRef = useRef();                                                               //Guardar método useRef() nas variáveis.
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("")
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();                                                            //Focar no primeiro input quando o componente rodar(loads). Para ativar, usar como um parâmetro ref na tag 
    }, [])

    useEffect(() => {
        setErrMsg("");                                                                      //Limpar a mensagem de erro quando as variáveis user e pwd mudarem. (Ex.: quando usuário estiver digitando ou corrigindo)
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();                                                                 //Evitar recarregamento da página 
        if (user.length === 0 || pwd.length === 0) {
            setErrMsg ("Error: There are empty fields!")
        } else {
            setSuccess(true)                                                                                                                                                 
        }
    }

    const handleLogout = async (e) => {
        e.preventDefault();
        setSuccess(false)
    }

    return (
        <>
            {success ? (                                                                  // Se success=true, retornar a página privada. Se não, retornar o formulário de login. 
                <PrivatePage logout={handleLogout} user={user}/>
            ) : (
                <div>
                    <h1>Login</h1>
                    <form id="login-form">
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>                {/*Mudar o estilo do p acordo com a condição (T ou F) da variável, através da mudança de className*/}

                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                            <button type="button" className="btn btn-primary btn-floating mx-1"><FaFacebookF /></button>              {/*Instalar pacote npm de ícones */}
                            <button type="button" className="btn btn-primary btn-floating mx-1"><FaTwitter /></button>
                            <button type="button" className="btn btn-primary btn-floating mx-1"><FaLinkedinIn /></button>
                        </div>

                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type="text"
                                id="form3Example3"
                                className="form-control form-control-lg"
                                placeholder="Username"
                                ref={userRef}                                           //Focar no input 
                                autoComplete="off"                                      //Evitar de autocompletar
                                onChange={(e) => setUser(e.target.value)}               //Guardar valor digitado no user
                                value={user}                                            //valor = valor guardado no user
                                required                                                //Campo obrigatório
                            />
                        </div>
                        <div className="form-outline mb-3">
                            <input
                                type="password"
                                id="form3Example4" F
                                className="form-control form-control-lg"
                                placeholder="Password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check mb-0">
                                <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    value=""
                                    id="form2Example3"
                                />
                                <label className="form-check-label" for="form2Example3">Remember me</label>
                            </div>
                            <Link to="#!" className="forgot-password">Forgot password?</Link>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-primary btn-lg"
                                onClick={handleSubmit}
                            >Login</button>
                            <p>Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default Login;
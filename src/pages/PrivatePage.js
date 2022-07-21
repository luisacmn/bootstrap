import React from "react"
import { Link } from "react-router-dom";

const PrivatePage = ( {logout, user} ) => {
    return (
        <div>
            <h1>PRIVATE</h1>
            <h3>Welcome to you page, {user}</h3>
            <p>Enter with another account? <Link onClick={logout} to="/login" className="link-danger">Logout</Link></p>
        </div>
    )
}

export default PrivatePage;
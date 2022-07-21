import React from "react"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div id="home">
            <h1>Home</h1>
            <p>Project developed to demonstrate the main and most used UI elements, such as Login/Register, Forms, Navbars, Dropdown, Buttons, and others.</p>
            <p>In the navigation bar, go to "tools" and select an option</p>
            <p>Useful Links:</p>
            <Link to="https://careerfoundry.com/en/blog/ui-design/ui-element-glossary/">32 UI Elements</Link>
        </div>
    )
}

export default Home;
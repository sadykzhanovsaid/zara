import React from "react"
import "./Footer.css"
import {Link} from "react-router-dom"

import Logo from "../../assets/logo.svg?react"

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__box">
                    <Link to="/"><Logo className="footer__logo"/></Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer
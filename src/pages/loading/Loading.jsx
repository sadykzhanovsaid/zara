import React from "react"
import "./Loading.css"

import Logo from "/public/logo.webp"

function Loading() {
    return (
        <section className="loading">
            <div className="loading__box">
                <img src={Logo} alt="logo"/>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                <div className="line4"></div>
                <div className="line5"></div>
                <div className="line6"></div>
                <div className="line7"></div>
            </div>
        </section>
    );
}

export default Loading
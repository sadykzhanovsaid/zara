import React from "react"
import {Link} from "react-router-dom"

import "./Header.css"
import "./HeaderMenu.css"
import "./HeaderSearch.css"

function Header({
                    isMenu,
                    setIsMenu,
                    cart
                }) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__box">
                    <div
                        className="header__menu"
                        onClick={() => setIsMenu(prev => !prev)}
                    >
                        <div className={`header__menu-icon ${isMenu ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                        </div>

                        <p className="header__menu-title">{isMenu ? "close" : "menu"}</p>
                    </div>

                    <div
                        className="header__search"
                    >

                        <p className="header__search-title">src<span>h</span></p>
                    </div>

                    <div className="header__cart">
                        <div className="header__lines">
                            <div className="header__line"></div>
                            <div className="header__line"></div>
                        </div>

                        <Link to="/cart" className="header__cart-title">cart <span>{cart.length}</span></Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header
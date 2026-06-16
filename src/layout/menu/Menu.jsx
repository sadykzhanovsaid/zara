import React, {useEffect} from "react"
import "./Menu.css"
import "./MenuLinks.css"
import {Link} from "react-router-dom"

function Menu({
                  isMenu,
                  setIsMenu
              }) {

    useEffect(() => {
        if (isMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenu]);

    return (
        <div className={`menu ${isMenu ? "active" : ""}`}>
            <div className="container">
                <div className="menu__box">
                    <div className="menu__links">
                        <div className="menu__link woman">
                            <Link to="/catalog" state={{ gender: "woman" }}>
                                <p
                                    className="menu__link-title"
                                    onClick={() => setIsMenu(prev => !prev)}
                                >Woman</p>
                            </Link>
                        </div>

                        <div className="menu__links-inline">
                            <div className="menu__link man">
                                <Link to="/catalog" state={{ gender: "man" }}>
                                    <p
                                        className="menu__link-title"
                                        onClick={() => setIsMenu(prev => !prev)}
                                    >Man</p></Link>
                            </div>

                            <div className="menu__link kids">
                                <Link to="/catalog" state={{ gender: "kids" }}>
                                    <p
                                        className="menu__link-title"
                                        onClick={() => setIsMenu(prev => !prev)}
                                    >Kids</p>
                                </Link>
                            </div>
                        </div>

                        <div className="menu__links-inline">
                            <div className="menu__link stories-p">
                                <Link to="/stories">
                                    <p
                                        className="menu__link-title"
                                        onClick={() => setIsMenu(prev => !prev)}
                                    >Stories</p>
                                </Link>
                            </div>

                            <div className="menu__link sale">
                                <Link to="/catalog" state={{ gender: "sale" }}>
                                    <p
                                        className="menu__link-title"
                                        onClick={() => setIsMenu(prev => !prev)}
                                    >SALE</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div
                        className="menu__search"
                        onClick={() => setIsMenu(prev => !prev)}
                    >
                        <div className="menu__search-inline">
                            <p className="menu__search-title">srch</p>
                            <div className="menu__search-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu
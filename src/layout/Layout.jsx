import React, {useState} from "react"
import "./Layout.css"
import {Outlet, useLocation} from "react-router-dom"

import Header from "./header/Header.jsx"
import Menu from "./menu/Menu.jsx"
import Footer from "./footer/Footer.jsx"

function Layout({cart}) {
    const [isMenu, setIsMenu] = useState(false)
    const location = useLocation()

    const hideFooterRoutes = ["/cart", "/catalog", "/stories"]
    const showFooter = hideFooterRoutes.includes(location.pathname)

    return (
        <>
            <Header
                isMenu={isMenu}
                setIsMenu={setIsMenu}
                cart={cart}
            />

            <Menu
                isMenu={isMenu}
                setIsMenu={setIsMenu}
            />

            <main key={location.pathname} className="page">
                <Outlet/>
            </main>

            {showFooter && <Footer/>}
        </>
    );
}

export default Layout
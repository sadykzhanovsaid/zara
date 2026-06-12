import React from "react"
import "./Empty.css"

import CartIcon from "../../assets/cart.svg?react"

function Empty() {
    return (
        <section className="empty">
            <div className="container">
                <div className="empty__box">
                    <CartIcon className="empty__icon"/>
                    <p className="empty__title">YOUR CART IS EMPTY</p>
                    <p className="empty__subtitle">Products you add to your cart will appear here.</p>
                </div>
            </div>
        </section>
    );
}

export default Empty
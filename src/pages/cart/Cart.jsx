import React from "react"
import "./Cart.css"
import {Link} from "react-router-dom"

import CartCard from "./cartCard/CartCard.jsx"
import ArrowIcon from "../../assets/arrow.svg?react"
import Empty from "../empty/Empty.jsx"

function Cart({
                  cart,
                  setCart,
                  incrementCount,
                  decrementCount,
                  removeProduct
              }) {

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.count,
        0
    );

    return (
        <>
            {cart.length >= 1 ?
                <section className="cart">
                    <div className="container">
                        <div className="cart__box">
                            <div className="cart__title-block">
                                <Link to="/">
                                    <p className="cart__path">Main page /</p>
                                </Link>
                                <p className="cart__title">Shopping cart</p>
                            </div>

                            <div className="cart__cards">
                                {cart.map((product) => {
                                    return <CartCard
                                        key={product.id}
                                        product={product}
                                        incrementCount={incrementCount}
                                        decrementCount={decrementCount}
                                        removeProduct={removeProduct}
                                    />
                                })}
                            </div>

                            <div className="cart__total-block">
                                <p className="cart__total">Total: ${Math.floor(totalPrice)}</p>
                                <button
                                    onClick={() => setCart([])}
                                    className="cart__total-submit"
                                >
                                    Checkout now
                                    <ArrowIcon/>
                                </button>
                            </div>
                        </div>
                    </div>
                </section> : <Empty/>}
        </>
    );
}

export default Cart
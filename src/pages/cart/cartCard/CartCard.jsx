import React, {useState} from "react"
import "./CartCard.css"
import "./CartCardSizes.css"
import "./CartCardCounter.css"

import Delete from "../../../assets/delete.svg?react"
import Select from "../../../assets/select.svg?react"

function CartCard({
                      product,
                      incrementCount,
                      decrementCount,
                      removeProduct
                  }) {
    const [isSize, setIsSize] = useState(false)
    const [sizeValue, setSizeValue] = useState("M")

    return (
        <div className="cartCard">
            <img
                className="cartCard__image"
                src={`/products/${product.images[4]}`}
                alt={product.title}
            />

            <div className="cartCard__content">
                <p className="cartCard__title">{product.title}</p>
                <p className="cartCard__color">{product.colors}</p>

                <div className="cartCard__sizes" onClick={() => setIsSize(prev => !prev)}>
                    <p className="cartCard__size">{sizeValue}</p>

                    {isSize ? null : <div className="cartCard__size-icon">
                        <Select/>
                    </div>}

                    {isSize ? <div className="cartCard__sizes-menu">
                        {product.sizes.map((size) => {
                            if (sizeValue !== size) {
                                return <p onClick={() => setSizeValue(size)} key={`${product.id}-${size}`}>{size}</p>
                            }
                        })}
                    </div> : null}
                </div>

                <div className="cartCard__counter">
                    <button
                        className="cartCard__minus"
                        onClick={() => decrementCount(product.id)}
                    >-
                    </button>
                    <p className="cartCard__count">{product.count}</p>
                    <button
                        className="cartCard__plus"
                        onClick={() => incrementCount(product.id)}
                    >+
                    </button>
                </div>
                <p className="cartCard__price">${Math.floor(product.price * product.count)}</p>
                <button
                    className="cartCard__delete"
                    onClick={() => removeProduct(product.id)}
                >
                    <Delete/>
                </button>
            </div>
        </div>
    );
}

export default CartCard
import React from "react"
import "./CatalogCard.css"

function CatalogCard({product, addProduct, addedId}) {
    return (
        <div className={`catalogCard ${addedId === product.id ? "shake" : ""}`}>
            <img
                className="catalogCard__image"
                src={`/products/${product.images[1]}`}
                alt={product.title}
            />

            <div className="catalogCard__content">
                <p className="catalogCard__title">{product.title}</p>
                <div className="catalog__row">
                    <p className="catalogCard__price">${Math.floor(product.price)}</p>
                    <button className="catalog__add" onClick={() => addProduct(product)}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CatalogCard
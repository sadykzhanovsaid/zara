import React, {useState, useEffect} from "react"
import "./Catalog.css"
import "./CatalogFilter.css"
import "./CatalogEmpty.css"
import {useLocation} from "react-router-dom"

import {products} from "../../../data.jsx"
import CatalogCard from "./CatalogCard/CatalogCard.jsx"

function Catalog({addProduct, addedId, setAddedId}) {
    const location = useLocation()
    const [gender, setGender] = useState(location.state?.gender || "man")

    useEffect(() => {
        if (location.state?.gender) {
            setGender(location.state.gender);
        }
    }, [location.state]);

    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__box">
                    {products.filter((product) => {
                        return product.gender === gender
                    }).length >= 1 ? <div className="catalog__cards">
                        {products.filter((product) => {
                            return product.gender === gender
                        }).map((product) => {
                            return <CatalogCard
                                key={product.id}
                                product={product}
                                addProduct={addProduct}
                                addedId={addedId}
                            />
                        })}
                    </div> : <div className="catalog__empty">
                        <p className="catalog__empty-title">Nothing found</p>
                        <p className="catalog__empty-subtitle">Try adjusting your filters or search criteria.</p>
                    </div>}

                    <div className="catalog__filter">
                        <div className="catalog__ganders">
                            <p
                                className={`catalog__gender ${gender === "woman" ? "active" : ""}`}
                                onClick={() => setGender("woman")}
                            >Woman</p>
                            <p
                                className={`catalog__gender ${gender === "man" ? "active" : ""}`}
                                onClick={() => setGender("man")}
                            >Man</p>
                            <p
                                className={`catalog__gender ${gender === "kids" ? "active" : ""}`}
                                onClick={() => setGender("kids")}
                            >Kids</p>
                            <p
                                className={`catalog__gender ${gender === "sale" ? "active" : ""}`}
                                onClick={() => setGender("sale")}
                            >Sale</p>
                        </div>

                        <div className="catalog__line"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Catalog
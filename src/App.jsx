import React, {useState, useEffect} from "react"
import "./App.css"
import {Route, Routes} from "react-router-dom"

import {productsHero} from "../data.jsx"
import Layout from "./layout/Layout.jsx"
import Hero from "./pages/hero/Hero.jsx"
import Loading from "./pages/loading/Loading.jsx"
import Cart from "./pages/cart/Cart.jsx"
import Catalog from "./pages/catalog/Catalog.jsx"
import Stories from "./pages/stories/Stories.jsx"

function App() {
    const [loading, setLoading] = useState(() => {
        return !localStorage.getItem("site-loaded")
    })
    const [cart, setCart] = useState([])
    const [addedId, setAddedId] = useState(null)

    useEffect(() => {
        if (!loading) return

        const startTime = Date.now()

        const images = []

        images.push("/loading.jpg")

        productsHero.forEach((product) => {
            product.images.forEach((image) => {
                images.push(`/products/${image}`)
            })
        })

        let loaded = 0

        const imageLoaded = () => {
            loaded++

            if (loaded === images.length) {
                const elapsed = Date.now() - startTime

                const remaining = Math.max(0, 3000 - elapsed)

                setTimeout(() => {
                    localStorage.setItem("site-loaded", "true")

                    setLoading(false)
                }, remaining)
            }
        }

        images.forEach((src) => {
            const img = new Image()

            img.src = src

            img.onload = imageLoaded
            img.onerror = imageLoaded
        })
    }, [loading])

    if (loading) {
        return (
            <Loading/>
        )
    }

    function addProduct(product) {
        if (navigator.vibrate) {
            navigator.vibrate(30);
        }

        setCart((prev) => {
            const exists = prev.find(item => item.id === product.id);

            if (exists) {
                return prev.map(item =>
                    item.id === product.id
                        ? {...item, count: item.count + 1}
                        : item
                );
            }

            return [...prev, {...product, count: 1}];
        });

        setAddedId(product.id);

        setTimeout(() => {
            setAddedId(null);
        }, 500);
    }

    const incrementCount = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {...item, count: item.count + 1}
                    : item
            )
        );
    };

    const decrementCount = (id) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? {...item, count: item.count - 1}
                        : item
                )
                .filter((item) => item.count > 0)
        );
    };

    const removeProduct = (id) => {
        setCart((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout
                    cart={cart}
                />}>
                    <Route index element={<Hero/>}/>
                    <Route path="/cart" element={<Cart
                        cart={cart}
                        setCart={setCart}
                        incrementCount={incrementCount}
                        decrementCount={decrementCount}
                        removeProduct={removeProduct}
                    />}/>
                    <Route path="/catalog" element={<Catalog addProduct={addProduct} addedId={addedId} setAddedId={setAddedId}/>}/>
                    <Route path="/stories" element={<Stories/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
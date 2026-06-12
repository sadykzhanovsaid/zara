import React, {useState, useEffect, useRef} from "react"
import "./Hero.css"
import {Link} from "react-router-dom"

import {productsHero} from "../../../data.jsx"
import Logo from "../../assets/logo.svg?react"

function Hero() {
    const [index, setIndex] = useState(Math.floor(Math.random() * productsHero.length))
    const [animate, setAnimate] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const touchStartX = useRef(0)
    const hoverRef = useRef(null)

    function changeAnimate(newIndex) {
        if (isAnimating) return

        setIsAnimating(true)
        setAnimate(true)

        setTimeout(() => {
            if (typeof newIndex === "number") {
                setIndex(newIndex)
            } else if (newIndex === "prev") {
                setIndex((prev) =>
                    prev === 0 ? productsHero.length - 1 : prev - 1
                )
            } else {
                setIndex((prev) => (prev + 1) % productsHero.length)
            }

            setAnimate(false)

            setTimeout(() => {
                setIsAnimating(false)
            }, 500)
        }, 500)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            changeAnimate()
        }, 10000)

        return () => clearInterval(interval)
    }, [index, isAnimating])

    function handleTouchStart(e) {
        touchStartX.current = e.touches[0].clientX
    }

    function handleMouseMove(e) {

        if (window.innerWidth < 1024) return

        const block = e.currentTarget
        const rect = block.getBoundingClientRect()

        const hover = hoverRef.current

        const hoverWidth = 112
        const hoverHeight = 150

        let x = e.clientX - rect.left - hoverWidth / 2
        let y = e.clientY - rect.top - hoverHeight / 2

        if (x < 0) x = 0

        if (x + hoverWidth > rect.width) {
            x = rect.width - hoverWidth
        }

        if (y < 0) y = 0

        if (y + hoverHeight > rect.height) {
            y = rect.height - hoverHeight
        }

        hover.style.left = `${x}px`
        hover.style.top = `${y}px`
    }

    function handleTouchEnd(e) {
        if (isAnimating) return

        const touchEndX = e.changedTouches[0].clientX
        const diff = touchStartX.current - touchEndX

        if (Math.abs(diff) < 50) return

        if (diff > 0) {
            changeAnimate()
        } else {
            changeAnimate("prev")
        }
    }

    useEffect(() => {
        const hero = document.querySelector(".hero")

        function wheelHandler(e) {
            e.preventDefault()

            if (isAnimating) return

            if (Math.abs(e.deltaX) < 40) return

            if (e.deltaX > 0) {
                changeAnimate()
            } else {
                changeAnimate("prev")
            }
        }

        hero.addEventListener("wheel", wheelHandler, {
            passive: false
        })

        return () => {
            hero.removeEventListener("wheel", wheelHandler)
        }
    }, [index, isAnimating])

    return (

        <section
            className="hero"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="container">
                <div className="hero__box">
                    <Link to="/catalog">
                        <div className="hero__card">
                            <div className="hero__image-block" onMouseMove={handleMouseMove}>
                                <img
                                    className="hero__image"
                                    src={`/products/${productsHero[index].images[4]}`}
                                    alt="zara"
                                />

                                <div className="hero__hover-block" ref={hoverRef}>
                                    <div className="hero__square"></div>

                                    <p className="hero__hover-title">{productsHero[index].title.toUpperCase()}</p>
                                    <p className="hero__hover-price">${Math.floor(productsHero[index].price)}</p>
                                </div>
                            </div>

                            <div className="hero__content">
                                <p className="hero__title">
                                    {productsHero[index].title.toUpperCase()}
                                </p>

                                <p className="hero__price">
                                    ${Math.floor(productsHero[index].price)}
                                </p>
                            </div>
                        </div>
                    </Link>

                    <div className={`hero__sliders ${isAnimating ? "animating" : ""}`}>
                        <div
                            onClick={() => changeAnimate(0)}
                            className={`hero__slider-line ${index === 0 ? "active" : ""}`}
                        >
                            <div></div>
                        </div>

                        <div
                            onClick={() => changeAnimate(1)}
                            className={`hero__slider-line ${index === 1 ? "active" : ""}`}
                        >
                            <div></div>
                        </div>

                        <div
                            onClick={() => changeAnimate(2)}
                            className={`hero__slider-line ${index === 2 ? "active" : ""}`}
                        >
                            <div></div>
                        </div>

                        <div
                            onClick={() => changeAnimate(3)}
                            className={`hero__slider-line ${index === 3 ? "active" : ""}`}
                        >
                            <div></div>
                        </div>

                        <div
                            onClick={() => changeAnimate(4)}
                            className={`hero__slider-line ${index === 4 ? "active" : ""}`}
                        >
                            <div></div>
                        </div>

                        <div
                            onClick={() => changeAnimate(5)}
                            className={`hero__slider-line ${index === 5 ? "active" : ""}`}
                        >
                            <div></div>
                        </div>
                    </div>
                </div>

                <Logo className="hero__logo"/>

                <div className="hero__texture"></div>

                <img
                    src={`/products/${productsHero[index].images[5]}`}
                    alt="zara"
                    className={`hero__human ${animate ? "hero-hide" : "hero-show"}`}
                />

                <Link to="/catalog">
                    <button className="hero__shop">
                        SHO<span>P</span>
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Hero
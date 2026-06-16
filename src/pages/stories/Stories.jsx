import React, {useEffect} from "react"
import "./Stories.css"
import {Link} from "react-router-dom"

function Stories() {

    useEffect(() => {
        const cards = document.querySelectorAll(".stories__card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cardsArray = [...cards];
                        const index = cardsArray.indexOf(entry.target);

                        setTimeout(() => {
                            entry.target.classList.add("show");
                        }, index * 150);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="stories">
            <div className="container">
                <div className="stories__box">
                    <div className="stories__title-block">
                        <Link to="/">
                            <p className="stories__path">Main page /</p>
                        </Link>
                        <p className="stories__title">Stories</p>
                    </div>

                    <div className="stories__cards">
                        <div className="stories__card highVoltage">
                            <img src="/public/stories/1.webp" alt="HIGH VOLTAGE" className="stories__image"/>
                            <div className="stories__card-content">
                                <p className="stories__card-title">HIGH VOLTAGE</p>
                                <p className="stories__card-subtitle">Spring-summer. Woman 2019.</p>
                            </div>
                        </div>
                        <div className="stories__card tailoring">
                            <div className="stories__card-content">
                                <p className="stories__card-title">TAILORING</p>
                                <p className="stories__card-subtitle">Spring-summer. Man. All time.</p>
                            </div>
                            <img src="/public/stories/2.webp" alt="TAILORING" className="stories__image"/>
                        </div>
                        <div className="stories__card theTourist">
                            <img src="/public/stories/3.webp" alt="THE TOURIST" className="stories__image"/>
                            <div className="stories__card-content">
                                <p className="stories__card-title">THE TOURIST</p>
                                <p className="stories__card-subtitle">Spring-summer. Woman 2019.</p>
                            </div>
                        </div>
                        <div className="stories__card beyondNature">
                            <img src="/public/stories/4.webp" alt="BEYOND NATURE" className="stories__image"/>
                            <div className="stories__card-content">
                                <p className="stories__card-title">BEYOND NATURE</p>
                                <p className="stories__card-subtitle">Spring-summer. TRF 2019.</p>
                            </div>
                        </div>
                        <div className="stories__card traveler">
                            <div className="stories__card-content">
                                <p className="stories__card-title">TRAVELER</p>
                                <p className="stories__card-subtitle">Spring-summer. Man 2019.</p>
                            </div>
                            <img src="/public/stories/5.webp" alt="Traveler" className="stories__image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stories
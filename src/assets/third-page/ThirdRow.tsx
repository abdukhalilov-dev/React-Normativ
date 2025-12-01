import { useState, useEffect } from 'react';
import './ThirdRow.css'

const images = [
    "slideshow__iphone.png",
    "slideshow__iphone.png",
    "slideshow__iphone.png",
    "slideshow__iphone.png",
    "slideshow__iphone.png"
]

function ThirdRow() {

    const [currentIndex, setCurrentIndex] =
        useState(0);

    const updateActiveSlide = (index: number) => {
        setCurrentIndex(index)
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 2000)

        return () =>
            clearInterval(interval)
    }, []);


    return (
        <>
            <div className="ThirdWrapper-row">
                <div className="products__types">
                    <div className="for__icons">
                        <p className="products__types-texts">Woman's Fashion</p>
                        <img src="./src/assets/icons/to-right-first.png" alt="" className="for__icons-icon" />
                    </div>

                    <div className="for__icons for__icons-second">
                        <p className="products__types-texts">Men's Fashion</p>
                        <img src="./src/assets/icons/to-right-first.png" alt="" className="for__icons-icon" />
                    </div>

                    <p className="products__types-texts">Electronics</p>
                    <p className="products__types-texts">Home & Lifestyle</p>
                    <p className="products__types-texts">Medicine</p>
                    <p className="products__types-texts">Sports & Outdoor</p>
                    <p className="products__types-texts">Baby's & Toys</p>
                    <p className="products__types-texts">Groceries & Pets</p>
                    <p className="products__types-texts">Health & Beauty</p>

                </div>

                <div className="slideshow">
                    <div className="slideshow__wrapper">
                        <div className="slideshow__text">
                            <div className="slideshow__apple">
                                <img src="./src/assets/img/Apple__logo.png" alt="" />
                                <p className="slide__p">iPhone 14 Series</p>
                            </div>
                            <div className="slideshow__second-text">
                                <p className="slide__p slide__second-p">Up to 10% off Voucher</p>
                            </div>
                            <div className="slideshow__shop">
                                <li>
                                    <div className="slide__a">
                                        Shop Now
                                    </div>
                                </li>
                                <img src="./src/assets/icons/arrow-right.png" alt="" />
                            </div>
                        </div>

                        <div className="slideshow__backgorund-img">
                            <img src="./src/assets/img/slideshow__iphone.png" alt="" />
                        </div>
                    </div>
                    <div className="slide__indicator">
                        {images.map((_, index) =>
                            <span
                                key={index}
                                className={`slide__span ${index === currentIndex ? "slide__active" : ""}`}
                                onClick={() => updateActiveSlide(index)}
                            >
                            </span>
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}

export default ThirdRow

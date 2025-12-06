import { Link } from "react-router-dom";
import "./About.css";
import { useEffect, useState } from "react";

// Slideshow rasmlari
import slide1 from "../../assets/img/slideshow__iphone.png";
import slide2 from "../../assets/img/slideshow__iphone.png";
import slide3 from "../../assets/img/slideshow__iphone.png";
import slide4 from "../../assets/img/slideshow__iphone.png";

// About block rasmlari
import aboutImg from "../../assets/img/about-img.png";

// Stats iconlar
import iconShop from "../../assets/icons/about_shop.png";
import iconBag from "../../assets/icons/about-bag.png";
import iconMoney from "../../assets/icons/about-moneybag.png";

// Team
import tomImg from "../../assets/img/tom.png";
import emmaImg from "../../assets/img/emma.png";
import smithImg from "../../assets/img/smith.png";
import twitterImg from "../../assets/img/about-twitter.png";
import instagramImg from "../../assets/img/icon-instagram (1).png";
import linkedinImg from "../../assets/img/Icon-Linkedin (1).png";

// Features iconlar
import deliverBus from "../../assets/img/deliver-bus.png";
import headphones from "../../assets/img/headphones.png";
import secure from "../../assets/img/secure.png";

const images = [slide1, slide2, slide3, slide4];

function About() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateActiveSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="about">

                {/* TOP LINKS */}
                <div className="top-text-counter">
                    <Link to="/sign" className={`count-home ${location.pathname === "/sign" ? "active" : ""}`}>
                        Account
                    </Link>
                    <p className="count-slash">/</p>

                    <Link to="/contact" className={`count-home ${location.pathname === "/contact" ? "active" : ""}`}>
                        Contact
                    </Link>
                    <p className="count-slash">/</p>

                    <Link to="/account" className={`count-home ${location.pathname === "/account" ? "active" : ""}`}>
                        My Account
                    </Link>
                    <p className="count-slash">/</p>

                    <Link to="/wishlist" className={`count-home ${location.pathname === "/wishlist" ? "active" : ""}`}>
                        Product
                    </Link>
                    <p className="count-slash">/</p>

                    <Link to="/counter" className={`count-home ${location.pathname === "/counter" ? "active" : ""}`}>
                        View Cart
                    </Link>
                    <p className="count-slash">/</p>

                    <Link to="/exclusive" className={`count-cart ${location.pathname === "/exclusive" ? "active" : ""}`}>
                        CheckOut
                    </Link>
                    <p className='count-slash'>/</p>

                    <Link
                        to="/gaming"
                        className={`count-cart ${location.pathname === "/gaming" ? "active" : ""}`}
                    >
                        Gaming
                    </Link>
                </div>

                {/* ABOUT TEXT + IMAGE */}
                <div className="about-img-text">
                    <div className="about-text">
                        <p className="about-our">Our Story</p>

                        <div className="own-about-p">
                            <p className="about-p">
                                Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                            </p>

                            <p className="about-p">
                                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                            </p>
                        </div>
                    </div>

                    <div className="about-img">
                        <img src={aboutImg} alt="about-img" />
                    </div>
                </div>

                {/* STATS */}
                <div className="about-stats">
                    <div className="about-stats-item">
                        <div className="features-img stats-img">
                            <img className="stats-small-img" src={iconShop} alt="" />
                        </div>
                        <div className="item-cost">
                            <p className="item-cost-p">10.5k</p>
                            <p className="item-cost-text">Sallers active our site</p>
                        </div>
                    </div>

                    <div className="about-stats-item">
                        <div className="features-img stats-img">
                            <img className="stats-small-img" src={iconShop} alt="" />
                        </div>
                        <div className="item-cost">
                            <p className="item-cost-p">33k</p>
                            <p className="item-cost-text">Monthly Product Sale</p>
                        </div>
                    </div>

                    <div className="about-stats-item">
                        <div className="features-img stats-img">
                            <img className="stats-small-img" src={iconBag} alt="" />
                        </div>
                        <div className="item-cost">
                            <p className="item-cost-p">45.5k</p>
                            <p className="item-cost-text">Customer active in our site</p>
                        </div>
                    </div>

                    <div className="about-stats-item">
                        <div className="features-img stats-img">
                            <img className="stats-small-img" src={iconMoney} alt="" />
                        </div>
                        <div className="item-cost">
                            <p className="item-cost-p">25k</p>
                            <p className="item-cost-text">Annual gross sale in our site</p>
                        </div>
                    </div>
                </div>

                {/* TEAM */}
                <div className="about-carts">

                    <div className="cart-tom">
                        <img src={tomImg} alt="" />
                        <div className="about-tom">
                            <p className="tom-name">Tom Cruise</p>
                            <p className="tom-job">Founder & Chairman</p>

                            <div className="social-medias">
                                <img src={twitterImg} alt="" className="tom-social-medias" />
                                <img src={instagramImg} alt="" className="tom-social-medias" />
                                <img src={linkedinImg} alt="" className="tom-social-medias" />
                            </div>
                        </div>
                    </div>

                    <div className="cart-tom">
                        <img src={emmaImg} alt="" />
                        <div className="about-tom">
                            <p className="tom-name">Emma Watson</p>
                            <p className="tom-job">Managing Director</p>

                            <div className="social-medias">
                                <img src={twitterImg} alt="" className="tom-social-medias" />
                                <img src={instagramImg} alt="" className="tom-social-medias" />
                                <img src={linkedinImg} alt="" className="tom-social-medias" />
                            </div>
                        </div>
                    </div>

                    <div className="cart-tom">
                        <img src={smithImg} alt="" />
                        <div className="about-tom">
                            <p className="tom-name">Will Smith</p>
                            <p className="tom-job">Product Designer</p>

                            <div className="social-medias">
                                <img src={twitterImg} alt="" className="tom-social-medias" />
                                <img src={instagramImg} alt="" className="tom-social-medias" />
                                <img src={linkedinImg} alt="" className="tom-social-medias" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* SLIDE BUTTONS */}
                <div className="tom-spans">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`slide__span ${index === currentIndex ? "slide__active" : ""}`}
                            onClick={() => updateActiveSlide(index)}
                        ></span>
                    ))}
                </div>

                {/* FEATURES */}
                <div className="features-section">
                    <div className="features-item">
                        <div className="features-img">
                            <img src={deliverBus} alt="" />
                        </div>
                        <div className="features-text">
                            <p className="first-text">FREE AND FAST DELIVERY</p>
                            <p className="second-text">Free delivery for all orders over $140</p>
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="features-img">
                            <img src={headphones} alt="" />
                        </div>
                        <div className="features-text">
                            <p className="first-text">24/7 CUSTOMER SERVICE</p>
                            <p className="second-text">Friendly 24/7 customer support</p>
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="features-img">
                            <img src={secure} alt="" />
                        </div>
                        <div className="features-text">
                            <p className="first-text">MONEY BACK GUARANTEE</p>
                            <p className="second-text">We return money within 30 days</p>
                        </div>
                    </div>
                </div>

            </div >
        </>
    );
}

export default About;

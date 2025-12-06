import { Link, useLocation } from "react-router-dom";
import "./Gaming.css";
import { useState } from "react";

// Images
import fSmallImg from '/src/assets/img/f-small-img.png'
import SSmallImg from "/src/assets/img/s-small-img.png"
import ThSmallImg from "/src/assets/img/th-small-img.png"
import FoSmallImg from "/src/assets/img/fo-small-img.png"
import FourStar from "/src/assets/img/Four Star.png"
import IconHeart from "/src/assets/img/heart.png"
import deliveryIcon from "/src/assets/img/icon-delivery.png"
import ReturnIcon from "/src/assets/img/icon-return.png"

import productImg from "../img/product__img-pls.png";
import KlaviaturaImg from "../img/klaviatura.png";
import KompyuterImg from "../img/kompyuter.png";
import ChairImg from "../img/chair.png";

import likeIcon from "../icons/product__like.png";
import eyeIcon from "../icons/product__eye.png";
import starIcon from "../icons/product__star.png";

interface ProductType {
    id: number;
    name: string;
    currentPrice: string;
    originalPrice: string;
    image: string;
    ratingCount: string;
    discount?: string; // Chegirma optional
}

function Gaming() {

    const products: ProductType[] = [
        {
            id: 1,
            name: "HAVIT HV-G92 Gamepad",
            currentPrice: "$120",
            originalPrice: "$160",
            image: productImg,
            ratingCount: "88",
            discount: "-40%",
        },
        {
            id: 2,
            name: "AK-900 Wired Keyboard",
            currentPrice: "$960",
            originalPrice: "$1160",
            image: KlaviaturaImg,
            ratingCount: "75",
            discount: "-35%",
        },
        {
            id: 3,
            name: "IPS LCD Gaming Monitor",
            currentPrice: "$370",
            originalPrice: "$400",
            image: KompyuterImg,
            ratingCount: "99",
            discount: "-30%",
        },
        {
            id: 4,
            name: "S-Series Comfort Chair ",
            currentPrice: "$374",
            originalPrice: "$400",
            image: ChairImg,
            ratingCount: "99",
            // 4-productga chegirma yo'q
        },
    ];

    const [selectedColor, setSelectedColor] = useState<string | null>(null)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [count, setCount] = useState(2)
    const location = useLocation()
    const [largeImg, setLargeImg] = useState(fSmallImg)
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)

    const colors = ["red", "blue"]
    const sizes = ["XS", "S", "M", "L", "XL"]
    const smallImages = [fSmallImg, SSmallImg, ThSmallImg, FoSmallImg]

    const buyNow = () => {
        if (!selectedColor) return console.log("Rang tanlanmadi");
        if (!selectedSize) return console.log("O'lcham tanlanmadi");

        console.log("Xarid haqida")
        console.log("Mahsulot: Havic HV G-92 Gamepad")
        console.log("Mahsulot: $192.00")
        console.log("Tanlangan rang:", selectedColor)
        console.log("Tanlangan o'lcham:", selectedSize)
        console.log("Miqdor:", count)
    }

    const handleLike = (product: ProductType) => {
        let liked = JSON.parse(localStorage.getItem("likedProducts") || "[]");
        liked.push(product);
        localStorage.setItem("likedProducts", JSON.stringify(liked));
        alert(`${product.name} LIKE saxifasiga qowildi`);
    };

    const handleAddToCart = (product: ProductType) => {
        let cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");
        cart.push(product);
        localStorage.setItem("cartProducts", JSON.stringify(cart));
        alert(`${product.name} CART saxifasiga qowildi`);
    };

    return (
        <>
            <div className="top-text-counter">
                <Link to="/sign" className={`count-home ${location.pathname === "/sign" ? "active" : ""}`}>Account</Link>
                <p className='count-slash'>/</p>

                <Link to="/contact" className={`count-home ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
                <p className='count-slash'>/</p>

                <Link to="/account" className={`count-home ${location.pathname === "/account" ? "active" : ""}`}>My Account</Link>
                <p className='count-slash'>/</p>

                <Link to="/wishlist" className={`count-home ${location.pathname === "/wishlist" ? "active" : ""}`}>Product</Link>
                <p className='count-slash'>/</p>

                <Link to="/counter" className={`count-home ${location.pathname === "/counter" ? "active" : ""}`}>View Cart</Link>
                <p className='count-slash'>/</p>

                <Link to="/exclusive" className={`count-cart ${location.pathname === "/exclusive" ? "active" : ""}`}>CheckOut</Link>
                <p className='count-slash'>/</p>

                <Link to="/gaming" className={`count-cart ${location.pathname === "/gaming" ? "active" : ""}`}>Gaming</Link>
            </div>

            <div className="gamepad">
                <div className="pad__imgs">
                    <div className="small__imgs">
                        {smallImages.map((img, index) => (
                            <img key={index} src={img} onClick={() => setLargeImg(img)} className="small-img" />
                        ))}
                    </div>
                    <div className="large__img">
                        <img className="big-img" src={largeImg} alt="" />
                    </div>
                </div>

                <div className="about__gamepad">
                    <h1 className="gamepad__h1">Havic HV G-92 Gamepad</h1>

                    <div className="gamepad__rank">
                        <img src={FourStar} alt="" />
                        <p className="rank__p">(150 Reviews)</p>
                        <p className="gamepad__stock">In Stock</p>
                    </div>

                    <p className="pad__price">$192.00</p>

                    <div className="about">
                        <p className="pad__about">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
                            for easy bubble free install & mess free removal Pressure sensitive.</p>
                    </div>

                    <div className="colours">
                        <p className="color__p">Colours:</p>
                        {colors.map((c) => (
                            <span
                                key={c}
                                className="color__span"
                                onClick={() => setSelectedColor(c)}
                                style={{
                                    background: c,
                                    border: selectedColor === c ? "2px solid black" : "2px solid transparent",
                                    cursor: "pointer",
                                    display: "inline-block",
                                    width: 25,
                                    height: 25,
                                    borderRadius: "50%"
                                }}
                            />
                        ))}
                    </div>

                    <div className="size">
                        <p className="size__p">Size:</p>
                        <div className="sizes">
                            {sizes.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSelectedSize(s)}
                                    className={`size__btn ${selectedSize === s ? "active" : ""}`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="gaming-count-button">
                        <div className="count">
                            <div className="counter">
                                <button className="count__btn btn__count" onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
                                <div className="span__count">
                                    <span className="count">{count}</span>
                                </div>
                                <button className="count__btn for__left" onClick={() => setCount(count + 1)}>+</button>
                            </div>
                        </div>

                        <button className="buy__btn" onClick={buyNow}>Buy Now</button>

                        <div className="heart__pad">
                            <img src={IconHeart} alt="" />
                        </div>
                    </div>

                    <div className="pad__order">
                        <div className="bus">
                            <img src={deliveryIcon} alt="" />
                            <div className="bus__title">
                                <p className="bus__p">Free Delivery</p>
                                <p className="bus__scnd">Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>

                        <div className="bus return">
                            <img src={ReturnIcon} alt="" />
                            <div className="bus__title">
                                <p className="bus__p">Return Delivery</p>
                                <p className="bus__scnd">Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gaming-top">
                <span className="gaming-span"></span>
                <p className="gaming-span-name">Related Item</p>
            </div>

            <div className="product__wrapper">
                {products.map((product, index) => (
                    <div className="product__cart" key={product.id}>
                        <div className="cart-top">
                            {/* Faqat 1,2,3 productlar uchun span */}
                            {index < 3 && <span className="product__span">{product.discount}</span>}

                            <div className="product__activates">
                                <div className="like" onClick={() => handleLike(product)}>
                                    <img src={likeIcon} alt="" className="like-icon" />
                                </div>

                                <div className="eye" onClick={() => setSelectedProduct(product)}>
                                    <img src={eyeIcon} alt="" className="eye-icon" />
                                </div>
                            </div>

                            <div className="product__img">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="cart-btn">
                                <button className="add__to-cart" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                            </div>
                        </div>

                        <div className="cart__bottom">
                            <div className="product__name-price">
                                <p className="product-name">{product.name}</p>
                                <div className="product__cost">
                                    <p className="current__cost">{product.currentPrice}</p>
                                    <p className="original__cost">{product.originalPrice}</p>
                                </div>
                            </div>

                            <div className="product__rating">
                                <img src={starIcon} alt="star" className="rating-star" />
                                <p className="rating-number">({product.ratingCount})</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Gaming;

import { Link, useLocation } from "react-router-dom";
import "./Gaming.css";
import { useState } from "react";

function Gaming() {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [count, setCount] = useState(2);
    const location = useLocation();
    const [largeImg, setLargeImg] = useState("/src/assets/img/f-small-img.png");

    const colors = ["red", "blue"];
    const sizes = ["XS", "S", "M", "L", "XL"];
    const smallImages = [
        "/src/assets/img/f-small-img.png",
        "/src/assets/img/s-small-img.png",
        "/src/assets/img/th-small-img.png",
        "/src/assets/img/fo-small-img.png"
    ];

    const buyNow = () => {
        if (!selectedColor) return console.log("Rang tanlanmadi");
        if (!selectedSize) return console.log("O'lcham tanlanmadi");

        console.log("Xarid tafsilotlari:");
        console.log("Mahsulot: HAVIT HV-G92 Gamepad");
        console.log("Narx: $192.00");
        console.log("Tanlangan rang:", selectedColor);
        console.log("Tanlangan o'lcham:", selectedSize);
        console.log("Miqdor:", count);
    };

    return (
        <>
            <div className="top-text-counter">
                <Link
                    to="/sign"
                    className={`count-home ${location.pathname === "/sign" ? "active" : ""}`}
                >
                    Account
                </Link>
                <p className='count-slash'>/</p>

                <Link
                    to="/contact"
                    className={`count-home ${location.pathname === "/contact" ? "active" : ""}`}
                >
                    Contact
                </Link>
                <p className='count-slash'>/</p>

                <Link
                    to="/account"
                    className={`count-home ${location.pathname === "/account" ? "active" : ""}`}
                >
                    My Account
                </Link>
                <p className='count-slash'>/</p>

                <Link
                    to="/wishlist"
                    className={`count-home ${location.pathname === "/wishlist" ? "active" : ""}`}
                >
                    Product
                </Link>
                <p className='count-slash'>/</p>

                <Link
                    to="/counter"
                    className={`count-home ${location.pathname === "/counter" ? "active" : ""}`}
                >
                    View Cart
                </Link>
                <p className='count-slash'>/</p>

                <Link
                    to="/exclusive"
                    className={`count-cart ${location.pathname === "/exclusive" ? "active" : ""}`}
                >
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

            <div className="gamepad">
                {/*  */}
                <div className="pad__imgs">
                    <div className="small__imgs">
                        {smallImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                onClick={() => setLargeImg(img)}
                                className="small-img"
                            />
                        ))}
                    </div>

                    <div className="large__img">
                        <img src={largeImg} className="big-img" />
                    </div>
                </div>
                {/*  */}

                <div className="about__gamepad">
                    <h1 className="gamepad__h1">Havic HV G-92 Gamepad</h1>

                    <div className="gamepad__rank">
                        <img src="/img/Four Star.png" alt="" />
                        <p className="rank__p">(150 Reviews)</p>
                        <p className="gamepad__stock">In Stock</p>
                    </div>

                    <p className="pad__price">$192.00</p>

                    <div className="about">
                        <p className="pad__about">
                            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
                            for easy bubble free install & mess free removal Pressure sensitive.
                        </p>
                    </div>

                    {/* Colours */}
                    <div className="colours">
                        <p className="color-p">Colours:</p>
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
                                    borderRadius: "50%",
                                }}
                            />
                        ))}
                    </div>

                    {/* Size */}
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

                    {/* Counter */}
                    <div className="count">
                        <div className="counter">
                            <button
                                className="count__btn btn__count"
                                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                            >
                                -
                            </button>
                            <div className="span__count">
                                <span className="count">{count}</span>
                            </div>
                            <button
                                className="count__btn for__left"
                                onClick={() => setCount(count + 1)}
                            >
                                +
                            </button>
                        </div>

                        <button className="buy__btn" onClick={buyNow}>
                            Buy Now
                        </button>

                        <div className="heart__pad">
                            <img src="./src/assets/img/like-gamepad.png" alt="" />
                        </div>
                    </div>
                    <div className="pad__order">
                        <div className="bus">
                            <img src="/img/icon-delivery.png" alt="" />
                            <div className="bus__title">
                                <p className="bus__p">Free Delivery</p>
                                <p className="bus__scnd">Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>

                        <div className="bus return">
                            <img src="/img/Icon-return.png" alt="" />
                            <div className="bus__title">
                                <p className="bus__p">Return Delivery</p>
                                <p className="bus__scnd">Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>

                    </div>
                </div>



            </div>

        </>
    );
}
export default Gaming;

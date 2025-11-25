import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartCounter.css';

function CartCounter() {
    const price1 = 650
    const price2 = 550

    const [quantity1, setQuantity1] = useState(1)
    const [quantity2, setQuantity2] = useState(1)

    return (
        <div className="counter-own">
            <div className="top-text-counter">
                <Link
                    to="/sign"
                    className={`count-home ${location.pathname === "/sign" ? "active" : ""}`}
                >
                    Account
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
            </div>
            <div className="CartCounter">
                <div className="counter-first">
                    <p className="counter-names">Product</p>
                    <p className="counter-names">Quantity</p>
                    <p className="counter-names">Price</p>
                    <p className="counter-names">Subtotal</p>
                </div>

                <div className="counter-second">

                    <div className="img-name">
                        <img src="./src/assets/img/monitor-small.png" alt="" />
                        <p className="img-text">LCD Monitor</p>
                    </div>

                    <div className="text">
                        <p className="p-cost padd">${price1}</p>
                    </div>
                    <div className="put">
                        <input
                            type="number"
                            className="input-cost"
                            min="1"
                            value={quantity1}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                setQuantity1(value < 1 ? 1 : value)
                            }}
                        />
                    </div>

                    <p className="p-final-cost">${price1 * quantity1}</p>



                    {/* <p className="p-cost">${price2}</p> */}
                </div>

                <div className="counter-second">

                    <div className="img-name">
                        <img src="./src/assets/img/monitor-small.png" alt="" />
                        <p className="img-text">LCD Monitor</p>
                    </div>
                    <div className="text">
                        <p className="p-cost padd">${price2}</p>
                    </div>
                    <div className="put">
                        <input
                            type="number"
                            className="input-cost"
                            min="1"
                            value={quantity2}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                setQuantity2(value < 1 ? 1 : value)
                            }}
                        />
                    </div>

                    <p className="p-final-cost">${price2 * quantity2}</p>



                    {/* <p className="p-cost">${price2}</p> */}
                </div>

            </div>
            <div className="counter-btn">
                <div className="btn-for-you">
                    <button className="wishlist__btn count-btn">Return To Shop</button>
                </div>

                <div className="btn-for-you">
                    <button className="wishlist__btn count-btn">Update Cart</button>
                </div>
            </div>

            <div className="counter-bottom">
                <div className="counter-cupon">
                    <input placeholder='Coupon Code' type="text" className="cupon-input" />
                    <button className='cupon-btn'>Apply Coupon</button>
                </div>

                <div className="counter-checkout">
                    <p className="check-name">Cart Total</p>
                    <div className="check-cost-name border-check">
                        <p className="check-text">Subtotal:</p>
                        <p className="check-text">$1750</p>
                    </div>
                    <div className="check-cost-name border-check for-top">
                        <p className="check-text">Shipping:</p>
                        <p className="check-text">Free</p>
                    </div>
                    <div className="check-cost-name border-check something for-top">
                        <p className="check-text">Total:</p>
                        <p className="check-text">$1750</p>
                    </div>
                    <div className="btn-checkout">
                        <Link to="/exclusive">
                            <button className="checkout-btn">Procees to checkout</button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CartCounter;
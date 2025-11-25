import { Link } from "react-router-dom"
import "./Exclusive.css"

function Exclusive() {
    return (
        <>
            <div className="billing">
                <div className="billing-inputs">
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
                    <div className="inputs-billing">
                        <h1 className="inputs-text">Billing Details</h1>
                        <div className="inputs-bill">
                            <div className="text-input">
                                <p className="bill-p">First Name*</p>
                                <input type="text" className="bill-input" />
                            </div>

                            <div className="text-input">
                                <p className="bill-p">Company Name</p>
                                <input type="text" className="bill-input" />
                            </div>

                            <div className="text-input">
                                <p className="bill-p">Street Address*</p>
                                <input type="text" className="bill-input" />
                            </div>

                            <div className="text-input">
                                <p className="bill-p">Apartment, floor, etc. (optional)</p>
                                <input type="text" className="bill-input" />
                            </div>

                            <div className="text-input">
                                <p className="bill-p">Town/City*</p>
                                <input type="text" className="bill-input" />
                            </div>

                            <div className="text-input">
                                <p className="bill-p">Phone Number*</p>
                                <input type="text" className="bill-input" />
                            </div>

                            <div className="text-input">
                                <p className="bill-p">Email Address*</p>
                                <input type="text" className="bill-input" />
                            </div>

                            <div className="bill-checkbox">
                                <input className="check-bill" type="checkbox" name="" id="" />
                                <p className="check-p">Save this information for faster check-out next time</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="billing-order">
                    <div className="bill-monitor order-padding">
                        <div className="bill-p-img">
                            <img src="./src/assets/img/gamepad-small.png" alt="" />
                            <p className="order-p">LCD Monitor</p>
                        </div>
                        <p className="order-product-cost">$650</p>
                    </div>

                    <div className="bill-monitor order-padding">
                        <div className="bill-p-img">
                            <img src="./src/assets/img/monitor-small.png" alt="" />
                            <p className="order-p">H1 Gamepad</p>
                        </div>
                        <p className="order-product-cost">$1100</p>
                    </div>

                    <div className="check-cost-name border-check for-order">
                        <p className="check-text">Subtotal:</p>
                        <p className="check-text">$1750</p>
                    </div>
                    <div className="check-cost-name border-check for-top  for-order">
                        <p className="check-text">Shipping:</p>
                        <p className="check-text">Free</p>
                    </div>
                    <div className="check-cost-name border-check something for-top order-padding  for-order">
                        <p className="check-text">Total:</p>
                        <p className="check-text">$1750</p>
                    </div>

                    <div className="checkbox-p-order order-padding">
                        <div className="order-bank">
                            <input type="checkbox" name="" id="" className="order-check" />
                            <p className="order-check-p">Bank</p>
                        </div>

                        <div className="order-cards-icons">
                            <img src="./src/assets/icons/b-cash.png" alt="" />
                            <img src="./src/assets/icons/Visa.png" alt="" />
                            <img src="./src/assets/icons/Mastercard.png" alt="" />
                            <img src="./src/assets/icons/Nagad.png" alt="" />
                        </div>

                    </div>

                    <div className="checkbox-p-order order-padding">
                        <div className="order-bank">
                            <input type="checkbox" name="" id="" className="order-check" />
                            <p className="order-check-p">Cash on delivery</p>
                        </div>
                    </div>

                    <div className="order-cupon-code order-padding">
                        <input placeholder="Coupon Code" type="text" className="cupon-input" />
                        <button className="cupon-btn">Apply Coupon</button>
                    </div>

                    <div className="btn-order-place-btn">
                        <button className="place-order-btn">Place Order</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Exclusive
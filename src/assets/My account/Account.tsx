import { Link } from "react-router-dom"
import "./Account.css"


function Account() {
    return (
        <>
            <div className="account">
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
                        className={`count-home ${location.pathname === "/sign" ? "active" : ""}`}
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
                        className={`count-cart ${location.pathname === "/exclusive" ? "active" : ""}`}
                    >
                        Gaming
                    </Link>

                </div>
                <div className="account-left-right-sides">
                    <div className="account-left-side">
                        <p className="left-text">Manage My Account</p>
                        <div className="about-left">
                            <p className="about-left-text">My Profile</p>
                            <p className="about-left-text">Address Book</p>
                            <p className="about-left-text">My Payment Options</p>
                        </div>
                        <p className="left-text">My Orders</p>
                        <div className="about-left">
                            <p className="about-left-text">My Returns</p>
                            <p className="about-left-text">My Cancellations</p>
                        </div>
                        <p className="left-text">My WishList</p>
                    </div>
                    <div className="account-right-side">
                        <p className="right-text">Edit Your Profile</p>
                        <div className="right-top-inputs">
                            <div className="name-inputs">

                                <div className="name-left-inputs">
                                    <p className="name-text">First Name</p>
                                    <input placeholder="Md" type="text" className="name-input" />
                                </div>

                                <div className="name-left-inputs">
                                    <p className="name-text">Email</p>
                                    <input placeholder="rimel1111@gmail.com" type="text" className="name-input" />
                                </div>

                            </div>
                            <div className="name-inputs">

                                <div className="name-left-inputs">
                                    <p className="name-text">First Name</p>
                                    <input placeholder="Md" type="text" className="name-input" />
                                </div>

                                <div className="name-left-inputs">
                                    <p className="name-text">Email</p>
                                    <input placeholder="rimel1111@gmail.com" type="text" className="name-input" />
                                </div>

                            </div>
                        </div>

                        <div className="rigth-bottom-inputs">
                            <p className="name-text">Password Changes</p>
                            <input className="bottom-inputs" placeholder="Current Passwod" />
                            <input className="bottom-inputs" placeholder="New Passwod" />
                            <input className="bottom-inputs" placeholder="Confirm New Passwod" />
                        </div>

                        <div className="account-btns">
                            <button className="account-cancel-btn">Cancel</button>
                            <button className="account-save-btn">Save Changes</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Account
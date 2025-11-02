import './SecondRow.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

function SecondRow() {

    const [showUserPage, setShowUserPage] = useState(false)

    return (
        <>
            <div className="Second__wrapper">
                {/* Logo */}
                <div className="wrap__logo">
                    <h1 className="text__logo">Exclusive</h1>
                </div>

                {/* Navigation */}
                <div className="ThirdWrapper">
                    <ul className="nav__ul">
                        <Link to="/">
                            <li className="nav__list"><a href="#" className="nav__link">Home</a></li>
                        </Link>
                        <Link to="/sign">
                            <li className="nav__list"><a href="#" className="nav__link">Contact</a></li>
                        </Link>
                        <Link to="/login">
                            <li className="nav__list"><a href="#" className="nav__link">About</a></li>
                        </Link>
                        <Link to="/wishlist">
                            <li className="nav__list"><a href="#" className="nav__link">Sign Up</a></li>
                        </Link>
                    </ul>
                </div>

                {/* Search + Icons */}
                <div className="FourthWrapper">
                    <div className="search__activites">
                        {/* Search box */}
                        <div className="search__box">
                            <input
                                type="text"
                                className="search__box-input"
                                placeholder='What are you looking for?'
                            />
                            <img
                                src="./src/assets/icons/search-icon.png"
                                alt="Search Icon"
                                className="search__box-icon" />
                        </div>

                        {/* Icons (heart + 2 carts) */}
                        <div className="search__interes">
                            <Link to="/saved">
                                <img
                                    src="./src/assets/icons/heart-icon.png"
                                    alt="Saved Items"
                                    className="search__like"
                                />
                            </Link>

                            <Link to="/cart">
                                <img
                                    src="./src/assets/icons/basket-icon.png"
                                    alt="Cart"
                                    className="search__like"
                                />
                            </Link>

                            <img
                                src="./src/assets/icons/user.png"
                                alt=""
                                className="search__user"
                                onClick={() => setShowUserPage(!showUserPage)}
                            />

                            {showUserPage && (
                                <div className="user__page">
                                    <div className="account">
                                        <div className="for-flex">
                                            <img className='acc-icons' src="./src/assets/icons/user-acc.png" alt="" />
                                            <p className="acc-p">Manage My Account</p>
                                        </div>
                                    </div>
                                    <div className="account">
                                        <div className="for-flex">
                                            <img className='acc-icons' src="./src/assets/icons/icon-mallbag.png" alt="" />
                                            <p className="acc-p">My Order</p>
                                        </div>
                                    </div>
                                    <div className="account">
                                        <div className="for-flex">
                                            <img className='acc-icons' src="./src/assets/icons/icon-cancel.png" alt="" />
                                            <p className="acc-p">My Cansellations</p>
                                        </div>

                                    </div>
                                    <div className="account">
                                        <div className="for-flex">
                                            <img className='acc-icons' src="./src/assets/icons/Icon-Reviews.png" alt="" />
                                            <p className="acc-p">My Reviews</p>
                                        </div>

                                    </div>
                                    <div className="account">
                                        <div className="for-flex">
                                            <img className='acc-icons' src="./src/assets/icons/Icon-logout.png" alt="" />
                                            <p className="acc-p">Logout</p>
                                        </div>
                                    </div>
                                </div>
                            )}



                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondRow;

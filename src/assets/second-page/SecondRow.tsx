import { useState } from "react";
import { Link } from "react-router-dom";
import './SecondRow.css';

// Icons import
import searchIcon from "../icons/search-icon.png";
import heartIcon from "../icons/heart-icon.png";
import basketIcon from "../icons/basket-icon.png";
import userIcon from "../icons/user.png";
import userAccIcon from "../icons/user-acc.png";
import mallBagIcon from "../icons/icon-mallbag.png";
import cancelIcon from "../icons/icon-cancel.png";
import reviewsIcon from "../icons/Icon-Reviews.png";
import logoutIcon from "../icons/Icon-logout.png";

function SecondRow() {
    const [showUserPage, setShowUserPage] = useState(false);

    return (
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
                    <Link to="/contact">
                        <li className="nav__list"><a href="#" className="nav__link">Contact</a></li>
                    </Link>
                    <Link to="/about">
                        <li className="nav__list"><a href="#" className="nav__link">About</a></li>
                    </Link>
                    <Link to="/login">
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
                            src={searchIcon}
                            alt="Search Icon"
                            className="search__box-icon"
                        />
                    </div>

                    {/* Icons (heart + 2 carts) */}
                    <div className="search__interes">
                        <Link to="/saved">
                            <img src={heartIcon} alt="Saved Items" className="search__like" />
                        </Link>

                        <Link to="/cart">
                            <img src={basketIcon} alt="Cart" className="search__like" />
                        </Link>

                        <img
                            src={userIcon}
                            alt=""
                            className="search__user"
                            onClick={() => setShowUserPage(!showUserPage)}
                        />

                        {showUserPage && (
                            <div className="user__page">
                                <div className="account">
                                    <div className="for-flex">
                                        <img className='acc-icons' src={userAccIcon} alt="" />
                                        <p className="acc-p">Manage My Account</p>
                                    </div>
                                </div>
                                <div className="account">
                                    <div className="for-flex">
                                        <img className='acc-icons' src={mallBagIcon} alt="" />
                                        <p className="acc-p">My Order</p>
                                    </div>
                                </div>
                                <div className="account">
                                    <div className="for-flex">
                                        <img className='acc-icons' src={cancelIcon} alt="" />
                                        <p className="acc-p">My Cancellations</p>
                                    </div>
                                </div>
                                <div className="account">
                                    <div className="for-flex">
                                        <img className='acc-icons' src={reviewsIcon} alt="" />
                                        <p className="acc-p">My Reviews</p>
                                    </div>
                                </div>
                                <div className="account">
                                    <div className="for-flex">
                                        <img className='acc-icons' src={logoutIcon} alt="" />
                                        <p className="acc-p">Logout</p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default SecondRow;

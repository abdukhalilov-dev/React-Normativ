import './Signup.css';
import { Link, useLocation } from 'react-router-dom';

// Rasmlar import
import phoneImg from "/src/assets/sign-image/phone.png";
import googleIcon from "/src/assets/sign-image/Icon-Google.png";

function Signup() {
    const location = useLocation();

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

            <div className="SignUp">
                <div className="sign-img">
                    <img src={phoneImg} alt="Phone" />
                </div>

                <div className="account">
                    <div className="create-account">
                        <p className="create-p">Create an account</p>
                        <p className="create-second-p">Enter your details below</p>
                    </div>

                    <div className="account-input">
                        <input placeholder='Name' type="text" className="name-number-email" />
                        <input placeholder='Email or Phone Number' type="text" className="name-number-email" />
                        <input placeholder='Password' type="password" className="name-number-email" />
                    </div>

                    <div className="account-btn">
                        <button className="create-btn">Create Account</button>
                        <button className="sign-btn">
                            <img src={googleIcon} alt="Google" />
                            Sign up with Google
                        </button>
                    </div>

                    <div className="account-link">
                        <p className="link">Already have account?</p>
                        <Link to="/login" className="link-span">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;

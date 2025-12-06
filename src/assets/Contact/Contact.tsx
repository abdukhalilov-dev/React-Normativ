import { Link } from 'react-router-dom'
import './Contact.css'

// Rasmlarni import qilish
import callIcon from "../../assets/icons/call.png"
import emailIcon from "../../assets/icons/email.png"

function Contact() {
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

            <div className="contact">
                <div className="call-page">

                    <div className="call">
                        <div className="call-to-us">
                            <div className="call-to-us-icon">
                                <img src={callIcon} alt="Call" />
                            </div>
                            <p className="call-to-us-p">Call To Us</p>
                        </div>

                        <div className="call-to-us-about">
                            <p className="call-to-us-text">We are available 24/7, 7 days a week.</p>
                            <p className="call-to-us-text">Phone: +8801611112222</p>
                        </div>
                    </div>

                    <div className="call write">
                        <div className="call-to-us">
                            <div className="call-to-us-icon">
                                <img src={emailIcon} alt="Email" />
                            </div>
                            <p className="call-to-us-p">Write To US</p>
                        </div>

                        <div className="call-to-us-about">
                            <p className="call-to-us-text">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="call-to-us-text">Emails: customer@exclusive.com</p>
                            <p className="call-to-us-text">Emails: support@exclusive.com</p>
                        </div>
                    </div>

                </div>

                <div className="contact-user">
                    <div className="about-user-inputs">
                        <input placeholder='Your Name *' type="text" className="userInputs" />
                        <input placeholder='Your Email *' type="text" className="userInputs" />
                        <input placeholder='Your Phone *' type="text" className="userInputs" />
                    </div>

                    <div className="user-message">
                        <input placeholder='Your Message' type="text" className="userMessage" />
                    </div>

                    <div className="send-btn">
                        <button className="sendBtn">Send Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact

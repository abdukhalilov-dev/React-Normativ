import { Link } from 'react-router-dom'
import './About.css'


function About() {
    return (
        <>
            <div className="about">
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
                <div className="about-img-text">
                    <div className="about-text">
                        <p className="about-our">Our Story</p>
                        <div className="own-about-p">
                            <p className="about-p">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                            <p className="about-p">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                        </div>
                    </div>

                    <div className="about-img">
                        <img src="./src/assets/img/about-img.png" alt="" />
                    </div>

                </div>

            </div>
        </>
    )
}


export default About
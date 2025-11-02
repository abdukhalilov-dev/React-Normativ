import './Footer.css'


function Footer() {
    return (
        <>
            <div className="footer-own">
                <div className="f-exc">
                    <p className="first-exc">Exclusive</p>
                    <p className="second-exc">Subscribe</p>
                    <p className="third-exc">Get 10% off your first order</p>
                    <div className="inp-icon">
                        <input placeholder='Enter your email' type="text" className="inp-exc" />
                        <div className="img-icon">
                            <img src="./src/assets/img/icon-send.png" alt="" className="icon-exc" />
                        </div>
                    </div>

                </div>

                <div className="f-center">
                    <div className="f-support">
                        <p className="f-sup">Support</p>
                        <p className="f-adress">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className="f-gmail f-adress">exclusive@gmail.com</p>
                        <p className="f-number f-adress">+88015-88888-9999</p>
                    </div>

                    <div className="f-account">
                        <p className="f-sup">Account</p>
                        <p className="f-adress">My Account</p>
                        <p className="f-gmail f-adress">Login / Register</p>
                        <p className="f-number f-adress">Cart</p>
                        <p className="f-number f-adress">Wishlist</p>
                        <p className="f-number f-adress">Shop</p>
                    </div>


                    <div className="f-link">
                        <p className="f-sup">Quick Link</p>
                        <p className="f-adress">Privacy Policy</p>
                        <p className="f-gmail f-adress">Terms Of Use</p>
                        <p className="f-number f-adress">FAQ</p>
                        <p className="f-number f-adress">Contact</p>
                    </div>

                </div>

                <div className="f-link">
                    <p className="f-sup margin-app">Download App</p>
                    <p className="user">Save $3 with App New User Only</p>
                    <div className="forGo-link">
                        <img src="./src/assets/img/qr-code.png" alt="" />
                        <div className="f-download">
                            <img src="./src/assets/img/playmarket.png" alt="" />
                            <img src="./src/assets/img/appstore.png" alt="" />
                        </div>

                    </div>

                    <div className="f-websites">
                        <img src="./src/assets/img/facebook.png" alt="" />
                        <img src="./src/assets/img/twitter.png" alt="" />
                        <img src="./src/assets/img/instagram.png" alt="" />
                        <img src="./src/assets/img/linkedin.png" alt="" />
                    </div>

                </div>
            </div>
            <div className="the-bottom">
                <p className="bottom-p">© Copyright Rimel 2022. All right reserved</p>
            </div>
        </>
    )
}

export default Footer
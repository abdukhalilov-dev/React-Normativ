import './FeaturesSection.css'



function FeaturesSection() {
    return (
        <>
            <div className="features-section">
                <div className="features-item">

                    <div className="features-img">
                        <img src="./src/assets/img/deliver-bus.png" alt="" />
                    </div>

                    <div className="features-text">
                        <p className="first-text">FREE AND FAST DELIVERY</p>
                        <p className="second-text">Free delivery for all orders over $140</p>
                    </div>

                </div>

                <div className="features-item">

                    <div className="features-img">
                        <img src="./src/assets/img/headphones.png" alt="" />
                    </div>

                    <div className="features-text">
                        <p className="first-text">24/7 CUSTOMER SERVICE</p>
                        <p className="second-text">Friendly 24/7 customer support</p>
                    </div>

                </div>

                <div className="features-item">

                    <div className="features-img">
                        <img src="./src/assets/img/secure.png" alt="" />
                    </div>

                    <div className="features-text">
                        <p className="first-text">MONEY BACK GUARANTEE</p>
                        <p className="second-text">We reurn money within 30 days</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FeaturesSection
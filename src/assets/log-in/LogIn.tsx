import './LogIn.css'



function LogIn() {
    return (
        <>
            <div className="SignUp">
                <div className="sign-img">
                    <img src="./src/assets/sign-image/phone.png" alt="" />
                </div>

                <div className="account">
                    <div className="create-account">
                        <p className="create-p">Log in to Exclusive</p>
                        <p className="create-second-p">Enter your details below</p>
                    </div>

                    <div className="account-input">
                        <input placeholder='Email or Phone Number' type="text" className="name-number-email" />
                        <input placeholder='Password' type="text" className="name-number-email" />
                    </div>

                    <div className="login-btn-p">
                        <button className="login-btn">Log In</button>
                        <p className="account-forgot">Forget Password?</p>
                    </div>


                </div>

            </div>
        </>
    )
}

export default LogIn
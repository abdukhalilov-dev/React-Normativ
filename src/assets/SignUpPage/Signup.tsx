import './Signup.css'



function Signup() {
    return (
        <>
            <div className="SignUp">
                <div className="sign-img">
                    <img src="./src/assets/sign-image/phone.png" alt="" />
                </div>

                <div className="account">
                    <div className="create-account">
                        <p className="create-p">Create an account</p>
                        <p className="create-second-p">Enter your details below</p>
                    </div>

                    <div className="account-input">
                        <input placeholder='Name' type="text" className="name-number-email" />
                        <input placeholder='Email or Phone Number' type="text" className="name-number-email" />
                        <input placeholder='Password' type="text" className="name-number-email" />
                    </div>

                    <div className="account-btn">
                        <button className="create-btn">Create Account</button>
                        <button className="sign-btn">
                            <img src="./src/assets/sign-image/Icon-Google.png" alt="" />
                            Sign up with Google
                            </button>
                    </div>

                    <div className="account-link">
                        <p className="link">Already have account?</p>
                        <a className="link-span">Log in</a>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Signup
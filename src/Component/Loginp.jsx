import React from 'react'
import './Loginp.css'
import { assets } from '../assets/images/assets';

const Loginp = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login");

    return (

        <div className='login-popup' id='login'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
                </div>
                <div className='login-poup-input'>
                    {currState === "Login" ? <></> : <input type='text' placeholder='Your name' required />}
                    <input type='email' placeholder='Your email' required />
                    <input type='password' placeholder='Your password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className='login-condition'>
                    <input type='checkbox' required />
                    <p>By continuing, i agree to the term of use & privacy policy.</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p>
                    : <p>Already have anan
                        account?<span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>

    )
}

export default Loginp

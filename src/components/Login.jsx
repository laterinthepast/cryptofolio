import React from 'react'
import Navigation from './Navigation'


const Login = () => {
    return (
        <div>
            <div className="login-wrapper">
                <div className="login-box">
                    <div className="login-label">
                        <h3><span className="login-label-span">Create</span> 12 letter word</h3>
                        <p>for example <span>akjfgbsolgvh</span> or <span>ihytgldefbht</span> you get the point ?</p>
                    </div>
                    <div className="login-input">
                        <input type="text" className="input-value" placeholder="REGISTER"></input>
                    </div>
                    <div className="login-label">
                        <h4>If you already have you username</h4>
                        <p>just log in</p>
                    </div>
                    <div className="login-input">
                        <input type="text" className="input-value" placeholder="LOG IN"></input>
                    </div>
                    <div className="login-text">
                        <p>please remember to write this down or save it into your browser</p>
                        <p>if you loose it you got yourself to blame</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

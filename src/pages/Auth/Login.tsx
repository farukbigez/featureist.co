import React from 'react'

import { LoginHuman } from '../../components/Icons'
import Button from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export default function Login() {
	function handleOptionSwitch () { window.location.replace('/register') }
	return (
		<div className="auth-section">
			<div className="auth-form">
				<div className="form--title">Login</div>
				<div className="form--desc color-notActive">Thanks for coming to Featureist.co, let’s get voted or voting for your product.</div>
				<div className="form-switch">
					<div className="option-switch option-switch--active">
						<span>Login</span> <hr />
					</div> 
					<div 
						className="option-switch option-switch--notActive"
						onClick={handleOptionSwitch}
					>
						<span>Register</span> <hr />
					</div> 
				</div>
				<Input type="text" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<Link to="/forgot-pass">
					<div className="auth--forgot-pass">Forgot Password?</div>
				</Link>
				<Button>Login</Button>
			</div>
			<LoginHuman />
		</div>
	)
}
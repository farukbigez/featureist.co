import React from 'react'

import { RegisterHuman } from '../../components/Icons'
import Button from '../../components/Button'
import { Input } from '../../components/Input'

export default function Login() {
	function handleOptionSwitch () { window.location.replace('/login') }
	return (
		<div className="content-container auth-section">
			<div className="auth-form">
				<div className="form--title">Register</div>
				<div className="form--desc color-notActive">To Begin your journey at Featureist.co, we need you to register our system.</div>
				<div className="form-switch">
					<div 
						className="option-switch option-switch--notActive"
						onClick={handleOptionSwitch}
					>
						<span>Login</span> <hr />
					</div> 
					<div 
						className="option-switch option-switch--active"
					>
						<span>Register</span> <hr />
					</div> 
				</div>
				<div className="names">
					<Input type="text" placeholder="Name" />
					<Input type="text" placeholder="Last Name" />
				</div>
				<Input type="text" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<Button type="primary">Register</Button>
			</div>
			<RegisterHuman />
		</div>
	)
}
import React from 'react'
import { LoginHuman } from '../../components/Icons'

export default function Login() {
	return (
		<div className="login-section">

			<div className="login-form">
				<div className="form-title">Register</div>
				<div className="form-desc">To Begin your journey at Featureist.co, we need you to register our system.</div>
				<div className="form-switch">
					<div className="login-switch"><span>Login</span> <hr /></div> 
					<div className="register-switch"><span>Register</span> <hr /></div> 
				</div>
				
			</div>

			<LoginHuman />
		</div>
	)
}
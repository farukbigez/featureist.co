import React, { useState } from 'react'
import classNames from 'classnames'

import { ForgotPassHuman, LoginHuman } from '../../components/Icons'
import StartButton from '../../components/Button'
import Button from '../../components/Button'
import { Input } from '../../components/Input'


export default function Login() {
	return (
		<div className="content-container auth-section">

			<div className="auth-form">
				<div className="form--title">Forgot Password?</div>
				<div className="form--desc">Don’t worry we’re backing you up.</div>
				<Input type="text" placeholder="Email" />
				<Button>Send Email</Button>
			</div>

			<ForgotPassHuman />
		</div>
	)
}
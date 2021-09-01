import React, { useState } from 'react'
import classNames from 'classnames'

import { ForgotPassHuman, LoginHuman } from '../../components/Icons'
import StartButton from '../../components/Button'
import Button from '../../components/Button'
import { Input } from '../../components/Input'


export default function Login() {
	return (
		<div className="auth-section color-white">

			<div className="auth-form">
				<div className="form--title">Forgot Password?</div>
				<div className="form--desc">Don’t worry we’re backing up you.</div>
				<Input type="text" placeholder="Email" />
				<Button type="start">Send Email</Button>
			</div>

			<ForgotPassHuman />
		</div>
	)
}
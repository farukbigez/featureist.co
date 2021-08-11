import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Icons/index'

export default function Header() {
	return (
		<div className="header">
			<div className="header-logo">
				<a href="/">
					<Logo />
				</a>
			</div>
		</div>
	)
}
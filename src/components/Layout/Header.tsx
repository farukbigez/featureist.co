import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavbarLogo } from '../Icons/index'

export default function Header() {
	return (
		<div className="header">
			<div className="header-logo">
				<a href="/">
					<NavbarLogo />
				</a>

			</div>
			<div className="header-links">
				<Link to="/">Home</Link>
				<Link to="/">Apps</Link>
				<Link to="/">Community</Link>
				<Link to="/">Account</Link>
			</div>
		</div>
	)
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'
import { NavbarLogo, MobileMenuLogo, HambugerMenu } from '../Icons/index'

export default function Header() {
	return (
		<div className="header">
			<div className="header-logo">
				<Link to="/">
					<NavbarLogo className="navbar-logo" />
					<MobileMenuLogo className="mobile-logo" />
				</Link>
			</div>

			<div className="header-links">
				<Link to="/">Home</Link>
				<Link to="/apps">Apps</Link>
				<Link to="/community">Community</Link>
				<Link to="/">Account</Link>
				<Link to="/register">
					<Button type="primary">Start a Voting</Button>
				</Link>
			</div>
			
			<div className="hamburger-menu">
				<HambugerMenu />
			</div>
		</div>
	)
}
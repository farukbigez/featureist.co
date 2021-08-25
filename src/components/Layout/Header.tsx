import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'
import { NavbarLogo, MobileMenuLogo, HambugerMenu } from '../Icons/index'
import classNames from 'classnames'

export default function Header() {
	return (
		<div className="header color-white">
			<div className="header-logo">
				<Link to="/">
					<NavbarLogo className="navbar-logo" />
					<MobileMenuLogo className="mobile-logo" />
				</Link>
			</div>

			<div className="header-links">
				<Link to="/">Home</Link>
				<Link to="/">Apps</Link>
				<Link to="/">Community</Link>
				<Link to="/">Account</Link>
				<Button type="start">Start a Voting</Button>
			</div>
			
			<div className="hamburger-menu">
				<HambugerMenu />
			</div>
		</div>
	)
}
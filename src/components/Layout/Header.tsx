import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StartButton from '../StartButton'
import { NavbarLogo } from '../Icons/index'

export default function Header() {
	return (
		<div className="header">
			<div className="header-logo">
				<Link to="/">
					<NavbarLogo />
				</Link>

			</div>
			<div className="header-links">
				<Link to="/">Home</Link>
				<Link to="/">Apps</Link>
				<Link to="/">Community</Link>
				<Link to="/">Account</Link>
				<StartButton>Start a Voting</StartButton>
			</div>
		</div>
	)
}
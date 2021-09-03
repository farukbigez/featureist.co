import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { RoundLogo } from '../Icons'

export default function Footer() {
	return (
		<div className="footer">
			<div className="link-group">
				<Link to="/">About</Link>
				<div className="link-name color-notActive">Featurist.com</div>

			</div>
			<div className="link-group">
				<Link to="/mailto:info@featureist.co">Contact</Link>
				<div className="link-name color-notActive">info@featureist.co</div>

			</div>
			<div className="link-group">
				<Link to="/privacy">Privacy</Link>
				<div className="link-name color-notActive">Privacy Policy</div>
			</div>
		</div>
	)
}
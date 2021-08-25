import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { RoundLogo } from '../Icons'

export default function Footer() {
	return (
		<div className="footer color-white">
			<div className="link-group">
				<Link to="/">About</Link>
				<div className="link-name">Featurist.com</div>

			</div>
			<div className="link-group">
				<Link to="/mailto:info@featureist.co">Contact</Link>
				<div className="link-name">info@featureist.co</div>

			</div>
			<div className="link-group">
				<Link to="/privacy">Privacy</Link>
				<div className="link-name">Privacy Policy</div>
			</div>
		</div>
	)
}
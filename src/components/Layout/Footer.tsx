import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<div className="footer">
			<div className="link-group">
				<Link to="/">About</Link>
				<Link to="/mailto:info@featureist.co">Contact</Link>
				<Link to="/privacy">Privacy</Link>
			</div>
		</div>
	)
}
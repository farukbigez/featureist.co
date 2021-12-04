import React from 'react'
import { Outlet } from 'react-router'

import '../../assets/css/main.css'
import Header from './Header'
import Footer from './Footer'

export default function LandingLayout () {
	return (
		<>
			<Header />
			<div className="content-container">
				<Outlet />
			</div>
			<Footer />
		</>
	)
}
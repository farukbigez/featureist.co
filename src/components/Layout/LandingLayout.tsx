import React from 'react'
import '../../assets/css/main.css'

import Header from './Header'
import Footer from './Footer'

export default function LandingLayout ({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<div className="content-container">
				{children}
			</div>
			<Footer />
		</>
	)
}
import React from 'react'
import { Helmet } from 'react-helmet'

export function NotFound () {
	return (
		<div className="content-container not-found">
			<Helmet>
				<title>404 - Not Found</title>
			</Helmet>

			<div className="not-found--404">404</div>
			<div className="not-found--text">Page Not Found</div>
		</div>
	)
}
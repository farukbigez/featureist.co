import React from 'react'
import { Helmet } from 'react-helmet'

export function NotFound () {
	return (
		<div className="not-found">
			<Helmet>
				<title>404 - Not Found</title>
			</Helmet>

			<div className="not-found--404">404</div>
			<div className="not-found--text">Not Found</div>
		</div>
	)
}
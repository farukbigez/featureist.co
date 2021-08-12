import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import './assets/css/main.css'

import NotFound from './pages/NotFound'
import LandingLayout from './components/Layout/LandingLayout'

export default function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>} />

			<Switch>

				<LandingLayout>
					<Route path={[ '/','/login', 'register', 'forgot-password', 'reset-password' ]}>
						<Switch>
							<Route path="/login"  />
						</Switch>
					</Route>

					<Route>
						<Route path="*" component={NotFound} />
					</Route>

				</LandingLayout>
				
			</Switch>
		</Router>
	)
}

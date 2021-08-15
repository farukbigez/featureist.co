import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import './assets/css/main.css'

import NotFound from './pages/NotFound'
import Home from './pages/Home'
import LandingLayout from './components/Layout/LandingLayout'

export default function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>} />

			<Switch>

				<Route exact path={[ '/','/login', 'register', 'forgot-password', 'reset-password' ]}>
					<Switch>
						<LandingLayout>
							<Route exact path="/" component={Home} />
							<Route path="/login" />
						</LandingLayout>
					</Switch>
				</Route>

				<Route path="*">
					<LandingLayout>
						<NotFound />
					</LandingLayout>
				</Route>

				
			</Switch>
		</Router>
	)
}

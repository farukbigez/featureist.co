import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import './assets/css/main.css'

import Login from './pages/Auth/Login'

import NotFound from './pages/NotFound'
import Home from './pages/Home'

import LandingLayout from './components/Layout/LandingLayout'
import AppLayout from './components/Layout/AppLayout'

export default function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>} />

			<Switch>

				<Route exact path={[ '/', ]}>
					<Switch>
						<LandingLayout>
							<Route exact path="/" component={Home} />
						</LandingLayout>
					</Switch>
				</Route>

				<Route exact path={[ '/login', 'register', 'forgot-password', 'reset-password' ]}>
					<AppLayout>
						<Route path="/login" component={Login} />
					</AppLayout>
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

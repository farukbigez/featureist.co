import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import './assets/css/main.css'

import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPass from './pages/Auth/ForgotPass'

import { NotFound } from './pages/NotFound'
import Home from './pages/Home'

import LandingLayout from './components/Layout/LandingLayout'
import AppLayout from './components/Layout/AppLayout'

export default function App() {
	return (
		<Router>
			<div className="page-content">
				<Suspense fallback={<div>Loading...</div>} />
				<Switch>

					<Route exact path={[ '/', ]}>
						<Switch>
							<LandingLayout>
								<Route exact path="/" component={Home} />
							</LandingLayout>
						</Switch>
					</Route>

					<Route exact path={[ '/login', '/register', '/forgot-pass', '/reset-pass' ]}>
						<AppLayout>
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
							<Route path="/forgot-pass" component={ForgotPass} />
						</AppLayout>
					</Route>

					<Route path="*">
						<LandingLayout>
							<NotFound />
						</LandingLayout>
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

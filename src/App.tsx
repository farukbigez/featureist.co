import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import './assets/css/main.css'

import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPass from './pages/Auth/ForgotPass'

import { NotFound } from './pages/NotFound'
import Home from './pages/Home'
import Apps from './pages/Apps'

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

					<Route exact path={[ '/login', '/register', '/forgot-pass', '/reset-pass', '/apps' ]}>
						<AppLayout>
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
							<Route path="/forgot-pass" component={ForgotPass} />
							<Route path="/apps" component={Apps} />
						</AppLayout>
					</Route>

					<Route path="*">
						<AppLayout>
							<NotFound />
						</AppLayout>
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

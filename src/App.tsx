import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom'
import './assets/css/main.css'

import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPass from './pages/Auth/ForgotPass'

import LandingLayout from './components/Layout/LandingLayout'
import AppLayout from './components/Layout/AppLayout'

import { NotFound } from './pages/NotFound'
import Home from './pages/Landing/Home'
import Apps from './pages/Apps'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingLayout />}>
					<Route path="/" element={<Home />} />
				</Route>

				<Route element={<AppLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="/forgot-pass" element={<ForgotPass />} />
					<Route path="/apps" element={<Apps />} />
				</Route>

				<Route>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Router>
	)
}

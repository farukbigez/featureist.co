import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

import App from './App'
import { Env } from './types/global'

const { REACT_APP_ENVIRONMENT ,REACT_APP_SENTRY_DSN } = process.env as unknown as Env

if(REACT_APP_ENVIRONMENT === 'production')
	Sentry.init({
		dsn: REACT_APP_SENTRY_DSN,
		integrations: [new Integrations.BrowserTracing()],

		// We recommend adjusting this value in production, or using tracesSampler
		// for finer control
		tracesSampleRate: 1.0,
		ignoreErrors: [
			'TypeError: Failed to fetch',
			'TypeError: NetworkError when attempting to fetch resource.'
		]
	})

ReactDOM.render(<App />, document.getElementById('main'))

// Can also use with React Concurrent Mode
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
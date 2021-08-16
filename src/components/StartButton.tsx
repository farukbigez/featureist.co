import React from 'react'
import { Link } from 'react-router-dom'

interface StartButtonProps {
	children?: React.ReactNode
}

export default function StartButton({ children }: StartButtonProps) {
	return (    
		<div className="start-button">
			<Link to="/login">{ children }</Link>
		</div>
	)
}
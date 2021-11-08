import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
	disabled?: boolean;
	loading?: boolean;
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler;
	className?: string;
	type?: 'primary';
}

export default function Button({ disabled, loading, children, onClick, className, type }: ButtonProps) {
	// When type is necesarry 
	// if (type === 'primary')
	// 	return (
	// 		<div className="button">
	// 			<Link to="/login">{ children }</Link>
	// 		</div>
	// 	)

	return (
		<div 
			className={classNames('button', {
				'button--disabled': disabled && !loading,
				'button--loading': loading
			}, className)}
			onClick={(event) => { !disabled && onClick && onClick(event) }}
		>
			<div className="button--content">
				{ children }
			</div>
			<div className="button--loading"></div>
		</div>
	)
}
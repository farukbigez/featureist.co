import React, { useState } from 'react'
import classNames from 'classnames'

export interface InputProps {
	type: 'text' | 'email' | 'password';
	value?: string | number;
	placeholder?: string;
	disabled?: boolean;
	onChange?: (value: string) => void;
	className?: string;
}

export const Input = ({ type, value, placeholder, disabled, onChange, className }: InputProps) => {
	const [isFocused, setIsFocused] = useState(false)

	const parentClassName = classNames('input', {
		'input--focused': isFocused,
		'input--disabled': disabled,
	}, className)

	return (
		<div className={parentClassName}>
			<input
				type={type}
				value={value}
				placeholder={placeholder}
				disabled={disabled}
				onChange={(event) => { if (onChange) onChange(event.target.value) }}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</div>
	)
}
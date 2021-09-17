import React, { useState } from 'react'

import { Input } from './Input'

interface Filter {
	children: React.ReactNode
}

export default function Filter({ children }: Filter) {

	return (
		<div className="filter color-black">
			<div className="filter-item">
				<div className="filter-select">
					<div className="filter--text">Filter</div>
					{ children }
				</div>
				<div className="filter-search">
					<div className="filter--text">Search</div>
					<Input type="search" />
				</div>
			</div>
		</div>
	)
}
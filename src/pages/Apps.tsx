import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Select from 'react-select'

import { AppsHuman, NavbarLogo, UnfoldMore } from '../components/Icons'
import FeatureCard from '../components/FeatureCard'
import Filter  from '../components/Filter'

const options = [
	{ value: 'test', label: 'test' },
	{ value: 'test2', label: 'test2' },
	{ value: 'test3', label: 'test3' },
	{ value: 'test4', label: 'test4' },
]

const components = {
	IndicatorSeparator: null,
}

export default function Apps() {
	const [selectedOption, setSelectedOption] = useState(null)

	return (
		<div className="apps-page">
			<Helmet>
				<title>Apps</title>
			</Helmet>

			<div className="manifest-section">
				<div className="left-column">
					<div className="left-column--title">Look at Apps</div>
					<div className="left-column--desc">See which app wanted new features and <br /> issues all over the market</div>
				</div>

				<AppsHuman />
			</div>

			<div className="filter-section">
				<Filter>
					<Select
						className={'react-select-container'}
						classNamePrefix={'react-select'}						
						defaultValue={selectedOption}
						onChange={() => setSelectedOption}
						options={options}
						placeholder={'Recents'}
					/>
					<Select
						components={components}
						className={'react-select-container'}
						classNamePrefix={'react-select'}
						defaultValue={selectedOption}
						isClearable={true}
						onChange={() => setSelectedOption}
						options={options}
						placeholder={'Upvotes'}
					/>
					<Select
						components={components}
						className={'react-select-container'}
						classNamePrefix={'react-select'}
						defaultValue={selectedOption}
						isClearable={true}
						onChange={() => setSelectedOption}
						options={options}
						placeholder={'Accepted'}
					/>
					<Select
						components={components}
						className={'react-select-container'}
						classNamePrefix={'react-select'}
						defaultValue={selectedOption}
						isClearable={true}
						onChange={() => setSelectedOption}
						options={options}
						placeholder={'Tickets'}
					/>
				</Filter>
			</div>

			<div className="feature-section">
				<FeatureCard 
					name="onurab" 
					cardTitle="Get More clickable things during something about something something something something something something" 
					cardDesc="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
				/>
				<FeatureCard 
					name="onurab" 
					cardTitle="Get More clickable things during something about something something something something something something" 
					cardDesc="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"  
				/>
				<FeatureCard 
					name="onurab" 
					cardTitle="Get More clickable things during something about something something something something something something" 
					cardDesc="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
				/>
			</div>
		</div>
	)
}
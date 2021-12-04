import React, { useState } from 'react'
import { Input } from './Input'

interface FeatureCard {
	name: string;
	cardTitle: string;
	cardDesc: string;
}

export default function FeatureCard({ name, cardTitle, cardDesc }: FeatureCard) {
	return (
		<div className="feature-card--container">
			<div className="card-content">
				<div className="card-header">
					<div className="user-pp"></div>
					<div className="user-name">{name}</div>
				</div>
				<div className="card-body">
					<div className="card-title">{cardTitle}</div>
					<div className="card-desc">{cardDesc}</div>
				</div>
				<div className="card-bottom">
					<div className="upvote"></div>
					<Input type="comment" placeholder="Add a comment..." />
				</div>
			</div>
		</div>
	)
}
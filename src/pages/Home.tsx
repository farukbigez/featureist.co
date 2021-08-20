import React from 'react'
import { Helmet } from 'react-helmet'

import StartButton from '../components/StartButton'
import { LearnHuman, HelpHuman, CommunityHuman, WhatHuman, JoinHuman } from '../components/Icons'
import SvgWhyHuman from '../components/Icons/WhyHuman'

export default function Home() {
	return (
		<div className="home-page">
			<Helmet>
				<title>Featureist.co - New way of the feature</title>
			</Helmet>
			
			<div className="manifest-section">
				<div className="manifest-text">Take a feature request by your own community.</div>
				<div className="right-manifest">
					<div className="right-manifest--title">Listen your community!</div>
					<div className="right-manifest--desc">Featureist.co is a platform where your products get feature request from your own community.</div>
					<StartButton>Start a Voting</StartButton>
				</div>
			</div>

			<div className="how-section">
				<div className="how-box">
					<LearnHuman />
					<div className="how-box--group">
						<div className="how-box--title">Learn</div>
						<div className="how-box--desc">Learn the steps it takes to build a successful business.</div>
					</div>
				</div>
				<div className="how-box">
					<HelpHuman />
					<div className="how-box--group">
						<div className="how-box--title">Help and support</div>
						<div className="how-box--desc">Find answers to questions you have about creating your own business.</div>
					</div>
				</div>
				<div className="how-box">
					<CommunityHuman />
					<div className="how-box--group">
						<div className="how-box--title">Community</div>
						<div className="how-box--desc">Share ideas and collaborate with other like-minded people.</div>
					</div>
				</div>
			</div>



			<div className="landing-section">
				<div className="section-text">
					<div className="section-title">Find out what your community wants and deploy that features</div>
					<div className="section-desc">Through featureist.co you can see what’s your community want’s from you.</div>
				</div>
				<WhatHuman />
			</div>

			<div className="landing-section">
				<SvgWhyHuman />
				<div className="section-text">
					<div className="section-title">Colloaborate with your community to community-driven product</div>
					<div className="section-desc">Create vote polls to which feature that your community wants. </div>
				</div>
			</div>

			<div className="landing-section">
				<div className="join-text">
					<div className="section-title">Ready to Join Featureist.co ? </div>
					<StartButton>Create a free account</StartButton>
				</div>
				<JoinHuman />
			</div>
		</div>
	)
}
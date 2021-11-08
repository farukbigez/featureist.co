import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import { LearnHuman, HelpHuman, CommunityHuman, WhatHuman, JoinHuman } from '../components/Icons'
import SvgWhyHuman from '../components/Icons/WhyHuman'

export default function Home() {
	return (
		<div className="home-page">
			<Helmet>
				<title>Featureist.co - Request a feature</title>
			</Helmet>
			
			<div className="manifest-section">
				<div className="manifest-text">Take a feature request by your own community.</div>
				<div className="right-manifest">
					<div className="right-manifest--title">Listen your community!</div>
					<div className="right-manifest--desc color-notActive">Featureist.co is a platform where your products get feature request from your own community.</div>
					<Link to="register">
						<Button>Start a Voting</Button>
					</Link>
				</div>
			</div>

			<div className="how-section">
				<div className="how-box ">
					<LearnHuman />
					<div className="how-box--group">
						<div className="how-box--title color-black">Learn</div>
						<div className="how-box--desc color-notActive">Learn the steps it takes to build a successful business.</div>
					</div>
				</div>

				<div className="how-box">
					<HelpHuman />
					<div className="how-box--group">
						<div className="how-box--title color-black">Support</div>
						<div className="how-box--desc color-notActive">Recommend new feature and ideas to improve the tool.</div>
					</div>
				</div>

				<div className="how-box">
					<CommunityHuman />
					<div className="how-box--group">
						<div className="how-box--title color-black">Community</div>
						<div className="how-box--desc color-notActive">Share ideas and collaborate with other like-minded people.</div>
					</div>
				</div>
			</div>

			<div className="spacer layer-1"></div>
			<div className="landing-section lightGreen-bg">
				<div className="section-text">
					<div className="section-title color-bg">Find out what your community wants and deploy that features</div>
					<div className="section-desc color-notActive">Through featureist.co you can see what’s your community want’s from you.</div>
				</div>
				<WhatHuman />
			</div>
			<div className="spacer layer-1 flip"></div>

			
			<div className="spacer layer-2"></div>
			<div className="landing-section lightBlue-bg">
				<SvgWhyHuman />
				<div className="section-text">
					<div className="section-title">Colloaborate with your community to community-driven product</div>
					<div className="section-desc">Create vote polls to which feature that your community wants. </div>
				</div>
			</div>
			<div className="spacer layer-2 flip"></div>

			<div className="spacer layer-3"></div>
			<div className="landing-section white-bg">
				<div className="join-text">
					<div className="section-title color-black">Ready to Join Featureist.co ? </div>
					<Link to="register">
						<Button>Create a free account</Button>
					</Link>
				</div>
				<JoinHuman />
			</div>
			<div className="spacer layer-3 flip"></div>
		</div>
	)
}
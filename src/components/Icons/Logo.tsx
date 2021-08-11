import * as React from 'react'

function SvgLogo(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="1em"
			height="1em"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle cx={24} cy={24} r={24} fill="#7F52CA" />
			<circle
				cx={24}
				cy={24}
				r={24}
				fill="url(#logo_svg__paint0_linear)"
				fillOpacity={0.2}
			/>
			<path
				d="M29.521 16.272v1.776h-7.272v5.64h5.904v1.776h-5.904V33h-2.184V16.272h9.456z"
				fill="#fff"
			/>
			<defs>
				<linearGradient
					id="logo_svg__paint0_linear"
					x1={24}
					y1={0}
					x2={24}
					y2={48}
					gradientUnits="userSpaceOnUse"
				>
					<stop
						offset={0.475}
						stopColor="#FF6B00"
						stopOpacity={0.94}
					/>
					<stop offset={1} stopOpacity={0} />
				</linearGradient>
			</defs>
		</svg>
	)
}

export default SvgLogo

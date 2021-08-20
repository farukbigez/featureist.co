import * as React from 'react'

function SvgHambugerMenu(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="1em"
			height="1em"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect width={24} height={3} rx={1.5} fill="#7F52CA" />
			<rect
				width={24}
				height={3}
				rx={1.5}
				fill="url(#hambuger-menu_svg__paint0_linear)"
				fillOpacity={0.3}
			/>
			<rect y={7} width={24} height={3} rx={1.5} fill="#7F52CA" />
			<rect
				y={7}
				width={24}
				height={3}
				rx={1.5}
				fill="url(#hambuger-menu_svg__paint1_linear)"
				fillOpacity={0.3}
			/>
			<rect y={14} width={24} height={3} rx={1.5} fill="#7F52CA" />
			<rect
				y={14}
				width={24}
				height={3}
				rx={1.5}
				fill="url(#hambuger-menu_svg__paint2_linear)"
				fillOpacity={0.3}
			/>
			<defs>
				<linearGradient
					id="hambuger-menu_svg__paint0_linear"
					x1={13.811}
					y1={2.143}
					x2={18.113}
					y2={2.143}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FF6B00" stopOpacity={0.3} />
					<stop offset={1} stopOpacity={0} />
				</linearGradient>
				<linearGradient
					id="hambuger-menu_svg__paint1_linear"
					x1={13.811}
					y1={9.143}
					x2={18.113}
					y2={9.143}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FF6B00" stopOpacity={0.3} />
					<stop offset={1} stopOpacity={0} />
				</linearGradient>
				<linearGradient
					id="hambuger-menu_svg__paint2_linear"
					x1={13.811}
					y1={16.143}
					x2={18.113}
					y2={16.143}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FF6B00" stopOpacity={0.3} />
					<stop offset={1} stopOpacity={0} />
				</linearGradient>
			</defs>
		</svg>
	)
}

export default SvgHambugerMenu

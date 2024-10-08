import * as React from 'react'

function SvgSearchIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M17.577 19l-4.767-4.766a5.035 5.035 0 01-6.336-7.76 5.035 5.035 0 017.761 6.335L19 17.577 17.577 19zM10.034 7.014a3.02 3.02 0 10-.004 6.04 3.02 3.02 0 00.004-6.04z"
				fill="#AAA"
			/>
		</svg>
	)
}

export default SvgSearchIcon

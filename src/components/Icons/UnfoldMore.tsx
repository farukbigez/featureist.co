import * as React from 'react'

function SvgUnfoldMore(props: React.SVGProps<SVGSVGElement>) {
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
				d="M12 21.9l-4.945-4.956 1.408-1.409L12 19.07l3.535-3.535 1.415 1.414L12 21.9zM8.463 8.465L7.05 7.05 12 2.1l4.944 4.955-1.408 1.408L12 4.93 8.464 8.464v.001z"
				fill="#000"
			/>
		</svg>
	)
}

export default SvgUnfoldMore

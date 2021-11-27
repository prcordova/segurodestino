import React from 'react';
import { colors } from '../colors';

const MinusIcon = ({ title, fill, style }) => (
	<svg
		style={style}
		className="minus-icon"
		width="30"
		height="6"
		viewBox="0 0 30 6"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{title || ''}</title>
		<path
			d="M17.8125 5.625H27.1875C27.9334 5.625 28.6488 5.32859 29.1763 4.80114C29.7037 4.27369 30 3.55842 30 2.8125C30 2.06658 29.7037 1.35119 29.1763 0.823746C28.6488 0.2963 27.9334 0 27.1875 0H2.8125C2.06658 0 1.35119 0.2963 0.823746 0.823746C0.296299 1.35119 0 2.06658 0 2.8125C0 3.55842 0.296299 4.27369 0.823746 4.80114C1.35119 5.32859 2.06658 5.625 2.8125 5.625H17.8125Z"
			fill={fill || colors.primaryRed}
		/>
	</svg>
);
export default MinusIcon;

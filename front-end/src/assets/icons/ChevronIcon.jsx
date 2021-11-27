import React from 'react';
import { colors } from '../colors';

const ChevronIcon = ({ title, fill, style }) => (
	<svg
		width="512"
		height="512"
		style={style}
		viewBox="0 0 512 512"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="chevron-icon"
	>
		<title>{title || 'Ícone de seta'}</title>
		<path
			d="M184 112L328 256L184 400"
			stroke={fill || colors.white}
			strokeWidth="48"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default ChevronIcon;

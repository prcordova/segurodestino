import React from 'react';

const Perfil = ({ fill, style, height, width }) => (
	<svg
		height={height}
		width={width}
		viewBox="0 0 24 38"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		style={style}
	>
		<path
			d="M3.09277 9C3.09277 4.02944 7.08098 0 12.0007 0C16.9204 0 20.9086 4.02944 20.9086 9C20.9086 13.9706 16.9204 18 12.0007 18C7.08098 18 3.09277 13.9706 3.09277 9Z"
			fill={fill}
		/>

		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M5.64887 19.1418C3.23999 19.6751 1.3466 21.6608 1.0034 24.1947L0.0553112 31.1947C-0.432395 34.7956 2.36729 38 6.00102 38H18.0001C21.6338 38 24.4335 34.7956 23.9458 31.1947L22.9977 24.1947C22.601 21.2659 20.1333 19.0696 17.1924 19.0016C17.5889 19.0108 17.9768 19.0587 18.3522 19.1418C16.5152 20.3186 14.3366 21 12.0005 21C9.66441 21 7.48583 20.3186 5.64887 19.1418Z"
			fill={fill}
		/>
	</svg>
);
export default Perfil;

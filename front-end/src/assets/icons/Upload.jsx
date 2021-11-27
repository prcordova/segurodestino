import React from 'react';
import { colors } from '../colors';

const UploadIcon = ({ title, fill, style }) => (
	<svg
		style={style}
		width="22"
		height="30"
		viewBox="0 0 22 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="upload-icon"
	>
		<title>{title || 'Exportar'}</title>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 16.0345C0 12.8922 2.57969 10.3448 5.76191 10.3448V13.4483C4.31544 13.4483 3.14286 14.6062 3.14286 16.0345V22.2414C3.14286 24.8124 5.25352 26.8966 7.85714 26.8966H14.1429C16.7465 26.8966 18.8571 24.8124 18.8571 22.2414V16.0345C18.8571 14.6062 17.6846 13.4483 16.2381 13.4483V10.3448C19.4203 10.3448 22 12.8922 22 16.0345V22.2414C22 26.5264 18.4822 30 14.1429 30H7.85714C3.51776 30 0 26.5264 0 22.2414V16.0345Z"
			fill={fill || colors.darkGrey}
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11 0C11.8679 0 12.5714 0.694731 12.5714 1.55172V13.9655C12.5714 14.8225 11.8679 15.5172 11 15.5172C10.1321 15.5172 9.42859 14.8225 9.42859 13.9655V1.55172C9.42859 0.694731 10.1321 0 11 0Z"
			fill={fill || colors.darkGrey}
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M9.88877 0.454489C10.5025 -0.151496 11.4974 -0.151496 12.1111 0.454489L16.3016 4.59242C16.9153 5.19841 16.9153 6.1809 16.3016 6.78689C15.6879 7.39288 14.6929 7.39288 14.0792 6.78689L10.9999 3.74619L7.92063 6.78689C7.30695 7.39288 6.31198 7.39288 5.6983 6.78689C5.08462 6.1809 5.08462 5.19841 5.6983 4.59242L9.88877 0.454489Z"
			fill={fill || colors.darkGrey}
		/>
	</svg>
);
export default UploadIcon;

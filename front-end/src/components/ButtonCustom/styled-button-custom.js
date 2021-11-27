import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const ButtonCustom = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	padding: 6px 12px;
	letter-spacing: 0.02857rem;
	font-weight: 600;
	border-radius: 0.625rem;
	width: ${({ width }) => width || '150px'};
	height: ${({ height }) => height || '3.13rem'};
	color: ${({ theme }) =>
		theme === 'gray'
			? colors.darkGrey
			: theme === 'outlined'
				? colors.primaryBlue
				: colors.darkGrey};
	background: ${({ theme }) =>
		theme === 'gray'
			? colors.lightGrey
			: theme === 'outlined'
				? 'transparent'
				: colors.degradeeTurquoise};
	border: 1px solid ${({ theme }) => theme === 'outlined' && colors.primaryBlue};
	cursor: ${({ isLoading }) => isLoading && 'progress'};

	&:hover:not(:disabled) {
		background: ${({ theme }) =>
		theme === 'outlined' && colors.degradeeTurquoise};
		color: ${({ theme }) => theme === 'outlined' && colors.darkGrey};
		opacity: ${({ theme }) => theme !== 'outlined' && '0.9'};

		svg path {
			fill: ${({ theme }) => theme === 'outlined' && colors.darkGrey};
		}
	}
`;

export const ContainerIcon = styled.span`
	margin-right: 10px;
	display: flex;
`;

/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import * as s from './styled-button-custom';
import Loader from '../Loader/loader';

const ButtonCustom = ({
	children,
	gray,
	outlined,
	height,
	width,
	onClick,
	startIcon,
	isLoading,
	disabled,
	type,
	border
}) => (
	<s.ButtonCustom
		className="button-custom"
		type={type || 'button'}
		height={height}
		width={width}
		theme={gray ? 'gray' : outlined ? 'outlined' : 'primary'}
		isLoading={isLoading}
		disabled={disabled}
		startIcon={startIcon}
		onClick={onClick}
		border={border}
	>
		{!isLoading && startIcon && <s.ContainerIcon>{startIcon}</s.ContainerIcon>}
		{isLoading ? <Loader /> : children}
	</s.ButtonCustom>
);

export default ButtonCustom;

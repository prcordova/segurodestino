/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
	RouteProps as ReactDOMRouteProps,
	Route as ReactDOMRoute,
	Redirect,
} from 'react-router-dom';
import { useAuth } from '../context/authContext';

const PrivateRoute = ({ isPrivate = false, component: Component, ...rest }) => {
	const { currentUser } = useAuth();

	return (
		<ReactDOMRoute
			{...rest}
			render={({ location }) =>
				isPrivate === !!currentUser ? (
					<Component />
				) : (
					<Redirect
						to={{
							pathname: isPrivate ? '/' : '/resumo',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { useAuth } from '../context/AuthContext';

import * as s from './styles';
import { Header, Sidemenu } from '../components';
import {
	Login,
	Signup,


} from '../pages';

const SideBarHeader = ({ children }) => (
	<Switch>
		<s.Container>
			<s.Wrapper>
				<Sidemenu />
				<main>
					<Header />
					{children}
				</main>
			</s.Wrapper>
		</s.Container>
	</Switch>
);
const Routes = () => {
	const { currentUser, loading } = useAuth();
	const currrentUserRole = currentUser?.role;

	if (loading) {
		return <div>Loading...</div>;
	}
	if (!loading) {
		if (!!currentUser === true) {
			switch (currrentUserRole) {
				case 'administrator':
					return (
						<SideBarHeader>
							{/* 
							<PrivateRoute path="/resumo" component={Dashboard} isPrivate />
							<PrivateRoute path="/extrato" component={Extract} isPrivate />
						 

								<PrivateRoute
									path="/taxas"
									component={Taxes}
									isPrivate
								/> */}
							< PrivateRoute
								path="/links-de-pagamento"
								component={() => <h1>Links de pagamento</h1>}
								isPrivate
							/>


							<PrivateRoute
								path="/configurações"
								component={() => <h1>Configurações</h1>}
								isPrivate
							/>
							<Redirect to="/" />
						</SideBarHeader>
					);
				// contractor admin
				case 'contractor':
					return (
						<SideBarHeader>



							{/* <PrivateRoute
								path="/taxas"
								component={Taxes}
								isPrivate
							/> */}
							<PrivateRoute
								path="/links-de-pagamento"
								component={() => <h1>Links de pagamento</h1>}
								isPrivate
							/>
							<PrivateRoute
								path="/clientes"
								component={() => <h1>Clientes</h1>}
								isPrivate
							/>
							<PrivateRoute
								path="/configurações"
								component={() => <h1>Configurações</h1>}
								isPrivate
							/>
							<Redirect to="/resumo" />
						</SideBarHeader>
					);
				default:
					return (
						<SideBarHeader>
							<PrivateRoute
								path="/error"
								component={() => <h1>erro</h1>}
								isPrivate
							/>
						</SideBarHeader>
					);
			}
		} else
			return (
				<Switch>
					<Route path="/Login" exact component={Login} />
					<Route path="/" exact component={Login} />
					<Route path="/signup" component={Signup} />


				</Switch>
			);
	}
};
export default Routes;

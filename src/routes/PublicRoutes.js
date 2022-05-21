import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sign from '../pages/LoginPage/Sign-in';


function PublicRoutes() {
	return (
		<Fragment>
			<Switch>
				<Route path=""><Sign /></Route>
			</Switch>
	</Fragment>
	)
}

export default PublicRoutes;
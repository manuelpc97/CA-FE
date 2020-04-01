import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('sessionStorage.getItem(isAuth) --->', sessionStorage.getItem('isAuth'));
	return (
        <Route
            {...rest}
            render={props => 
                sessionStorage.getItem('isAuth') ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location}
                        }}
                    />
                )
            }
        />
	);
};

export default PrivateRoute;

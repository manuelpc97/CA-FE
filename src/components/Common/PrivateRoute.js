import React from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../../App.js";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('isAuth') ?
                (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                        }}
                    />
                )
        }
    />
);


export default PrivateRoute;

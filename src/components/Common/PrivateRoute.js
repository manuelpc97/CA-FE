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
    // const handleComponentView = ({ props, isAuthenticated }) => {
    //     console.log(' handleComponentView ---> isAuthenticated ', isAuthenticated);
    //     if (!isAuthenticated) {
    //         return <p>Please log in</p>
    //     }

    //     return <Component {...props} {...rest} />
    // }

    // return (
    //     <AuthContext.Consumer {...rest}>
    //         {({ isAuthenticated }) => (
    //             <Route
    //                 {...rest}
    //                 render={props =>
    //                     handleComponentView({ props, isAuthenticated })
    //                 }
    //             />
    //         )}
    //     </AuthContext.Consumer>
    // )


export default PrivateRoute;

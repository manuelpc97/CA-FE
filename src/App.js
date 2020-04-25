import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/Login/Login';
import PrivateRoute from './components/Common/PrivateRoute';
import Layout from './components/Layout/layout';
import Home from './containers/Home/home';
import Comparison from './components/Comparison';
import serviceLogin from './services/logIn';
import { Redirect } from "react-router-dom";
import FirstForm from './containers/Forms/forms';
import {
    NotificationContainer
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
export const AuthContext = React.createContext({
    isAuthenticated: false,
    user: null,
    toggleAuth: () => { }
})
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAlreadyAuth: false,
        }

    }
    componentDidMount() {
 
    }

    handleLoginSubmit = (usernameLogin, passwordLogin) => {

        return serviceLogin({ username: usernameLogin, password: passwordLogin })
            .then(login => {
                localStorage.setItem('isAuth', true);
                this.setState({ isAlreadyAuth: true })
                console.log('login ----> ', login);
                return true;

            })
            .catch(error => {
                console.log('error----> ', error);
            })

    }

    logOut = () =>{
        console.log('entra');
        this.setState({ isAlreadyAuth: false })
        localStorage.removeItem('isAuth');
    }

    render() {
        let { isAlreadyAuth } = this.state;
        return (
            <div style={{ height: "100%", paddingTop: "4%" }}>
                <AuthContext.Provider
                    value={{ isAuthenticated: isAlreadyAuth }}
                >
                    <BrowserRouter>
                        <Layout isAlreadyAuth={isAlreadyAuth} logOut={this.logOut}>
                            <Switch>
                                <Route
                                    exact
                                    path={'/'}
                                    render={() => <Login handleLoginSubmit={this.handleLoginSubmit} />}
                                />
                                <PrivateRoute
                                    exact
                                    path={'/home'}
                                    // isAuthenticated={isAlreadyAuth}
                                    method={'GET'}
                                    component={Home}
                                />
                                <PrivateRoute
                                    path={'/comparison'}
                                    // isAuthenticated={isAuthenticated}
                                    method={'GET'}
                                    component={Comparison}
                                />
                                <PrivateRoute
                                    path={'/form'}
                                    // isAuthenticated={isAuthenticated}
                                    method={'GET'}
                                    component={FirstForm}
                                />
                            </Switch>
                        </Layout>
                    </BrowserRouter>
                    <NotificationContainer />
                </AuthContext.Provider>
            </div>
        );
    }
}

export default App;
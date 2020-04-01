import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/Login/Login';
import PrivateRoute from './components/Common/PrivateRoute';
import Layout from './components/Layout/layout';
import Home from './containers/Home/home';
import {
    NotificationContainer,
    NotificationManager
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
        const isAlreadyAuth = sessionStorage.getItem('isAuth')
        if (isAlreadyAuth === 'true') {
            this.setState({
                isAlreadyAuth: true
            })
        }
    }

    render() {
        let { isAlreadyAuth } = this.state;
        return (
            <div style={{ height: "100%" }}>
                <AuthContext.Provider
                // value={{ isAuthenticated: isAuthenticated }}
                >
                    <BrowserRouter>
                        <Layout isAlreadyAuth={isAlreadyAuth}>
                            <Switch>
                                <Route
                                    exact
                                    path={'/'}
                                    render={() => <Login />}
                                />
                                <PrivateRoute
                                    exact
                                    path={'/home'}
                                    // isAuthenticated={isAuthenticated}
                                    method={'GET'}
                                    component={Home}
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
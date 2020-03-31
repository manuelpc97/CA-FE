import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/Login/Login';
import PrivateRoute from './components/Common/PrivateRoute';
import Layout from './components/Layout/layout';
import Home from './containers/Home/home';
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
        console.log('isAlreadyAuth----> ', isAlreadyAuth);
        if (isAlreadyAuth === 'true') {
            this.setState({
                isAlreadyAuth: true
            })
        }
        // if(isAlreadyAuth !== 'true')
        // sessionStorage.setItem('isAuth', false);
    }

    render() {
        let { isAlreadyAuth } = this.state;
        // console.log('isAuthenticated ---> ', isAuthenticated);
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
                </AuthContext.Provider>
            </div>
        );
    }
}

export default App;
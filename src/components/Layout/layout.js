import React from 'react';
import Navbar from '../../containers/Navbar/navbar';
const Layout = props => {

    const { isAlreadyAuth } = props;
    console.log('isAlreadyAuth LAYOUT ---> ', isAlreadyAuth);

    return (
        <div className="d-flex flex-column h-100">
            <Navbar/>
            <main role="main">
                {props.children}
            </main>

        </div>
    )
}

export default Layout;
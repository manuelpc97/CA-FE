import React from 'react';
import Navbar from '../../containers/Navbar/navbar';
const Layout = props => {

    return (
        <div className="d-flex flex-column h-100">
            <Navbar isAlreadyAuth = {props.isAlreadyAuth}/>
            <main role="main">
                {props.children}
            </main>

        </div>
    )
}

export default Layout;
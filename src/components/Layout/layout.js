import React from 'react';

const Layout = props => {

    // const isAuthenticated = sessionStorage.getItem('isAuth');
    const { isAlreadyAuth } = props;

    console.log('isAuthenticated layout --->', isAlreadyAuth);
    // TODO: ADD LOG OUT BUTTON
    if (!isAlreadyAuth) {
        return (
            <div className="d-flex flex-column h-100">
                <main role="main">
                    {props.children}
                </main>
            </div>
        )
    }
    console.log('NO ES FALSO')
    return (
        <div className="d-flex flex-column h-100">
            <nav class="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <a class="navbar-brand" href="/adios">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="/">Features</a>
                        <a class="nav-item nav-link" href="/">Pricing</a>
                        <a class="nav-item nav-link disabled" href="/">Disabled</a>
                    </div>
                </div>
            </nav>

            <main role="main">
                {props.children}
            </main>

        </div>
    )
}

export default Layout;
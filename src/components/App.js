import React, { Component } from 'react';

class App extends Component {
    componentDidMount(){
        this.props.getAllBusiness();
    }

    render() {
        console.log('BUSINESSES: ', this.props.businesses);
        return <div>DESDE ZERO</div>
    }
}

export default App;
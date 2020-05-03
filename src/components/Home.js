import React, {Component} from 'react';

class Home extends Component{
    componentDidMount(){
        console.log('MY PROPS: ', this.props.params);
    }

    render(){
        return <div>AHORA ESTOY EN EL HOME</div>
    }
}

export default Home;
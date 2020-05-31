import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component{
    componentDidMount(){
        console.log('USER: ', this.props.user);
    }

    render(){
        return <div>PROFILE</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
}

export default connect(mapStateToProps, {})(Profile);
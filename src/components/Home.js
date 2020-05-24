import '../styles/Home.css';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid} from '@material-ui/core';

import Sidebar from './sidebar/Sidebar';
import Products from './Products';
import Profile from './Profile';

class Home extends Component{
    render(){
        return <Grid className = {'home-container'} container spacing ={1}>
            <Grid className = {'sidebar-container'} item xs={2}><Sidebar currentIndex = {this.props.currentIndex}/></Grid>
            <Grid item xs={9}>{this.renderContent()}</Grid>
        </Grid>
    }

    renderContent = () => {
        switch(this.props.currentIndex){
            case 0: 
                return <Products/>;
            case 1:
                return <Profile/>;
        }
        return null;
    }
}

const mapStateToProp = state => {
    return {
        currentIndex : state.sidebar.currentIndex
    }
}

export default connect(mapStateToProp, {})(Home);
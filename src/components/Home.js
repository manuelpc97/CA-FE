import '../styles/Home.css';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid} from '@material-ui/core';

import Sidebar from './sidebar/Sidebar';

class Home extends Component{
    render(){
        return <Grid className = {'home-container'} container spacing ={0}>
            <Grid className = {'sidebar-container'} item xs={3}><Sidebar currentIndex = {this.props.currentIndex}/></Grid>
            <Grid item xs={9}></Grid>
        </Grid>
    }

    renderContent = () => {

    }
}

const mapStateToProp = state => {
    return {
        currentIndex : state.sidebar.currentIndex
    }
}

export default connect(mapStateToProp, {})(Home);
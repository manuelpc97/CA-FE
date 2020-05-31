import '../styles/Home.css';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid} from '@material-ui/core';

import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

class Home extends Component{
    render(){
        return <Grid className = {'home-container'} container>
            <Grid className = {'sidebar-container'} item xs={2}><Sidebar currentIndex = {this.props.currentIndex}/></Grid>
            <Grid item xs={9}><Content index = {this.props.currentIndex} params = {this.props.tabParams}/></Grid>
        </Grid>
    }
}

const mapStateToProp = state => {
    return {
        currentIndex : state.sidebar.currentIndex,
        tabParams: state.sidebar.params
    }
}

export default connect(mapStateToProp, {})(Home);
import '../styles/Home.css';

import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

import Sidebar from './Sidebar';

class Home extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        return <Grid className = {'home-container'} container spacing ={0}>
            <Grid className = {'sidebar-container'} item xs={3}><Sidebar/></Grid>
            <Grid item xs={9}></Grid>
        </Grid>
    }
}

export default Home;
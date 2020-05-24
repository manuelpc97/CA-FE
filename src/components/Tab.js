import '../styles/Tab.css';

import React, {Component} from 'react';
import {ListItem, ListItemText} from '@material-ui/core';

class Tab extends Component{
    render(){
        return <ListItem button className = 'sidebar-tab'>
            <ListItemText primary = {this.props.tab.text}/>
        </ListItem>;
    }
}

export default Tab;
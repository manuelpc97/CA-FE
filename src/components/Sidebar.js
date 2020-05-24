import '../styles/Sidebar.css';
import React,{Component} from 'react';
import {List, ListSubheader, Divider} from '@material-ui/core';

class Sidebar extends Component{
    render(){
        return <List subheader = {this.renderSubheader()}>

        </List>;
    }

    renderSubheader = () => {
        return <ListSubheader>
            <div className = 'sidebar-subheader'>SEGURU</div>
            <Divider className = 'sidebar-divider' variant = 'middle'></Divider>
        </ListSubheader>
    }
}

export default Sidebar;
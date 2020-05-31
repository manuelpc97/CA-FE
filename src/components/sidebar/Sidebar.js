import '../../styles/Sidebar.css';

import React,{Component} from 'react';
import {List, ListSubheader, Divider} from '@material-ui/core';
import {Person, Dashboard, LocalGroceryStore} from '@material-ui/icons';

import Tab from './Tab';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.tabs = [
            {
                text: 'Seguros',
                icon: <Dashboard/> 
            },
            {
                text: 'Perfil',
                icon: <Person/> 
            }, 
            {
                text: 'Productos', 
                icon: <LocalGroceryStore/>
            }
        ]
    }
    render(){
        return <List subheader = {this.renderSubheader()}>
            {this.tabs.map((tab, index) => <Tab tab = {tab} key = {index} focused = {this.props.currentIndex === index} index = {index}/>)}
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
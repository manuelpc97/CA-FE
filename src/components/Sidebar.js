import '../styles/Sidebar.css';

import React,{Component} from 'react';
import {List, ListSubheader, Divider} from '@material-ui/core';

import Tab from './Tab';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.tabs = [
            {
                text: 'PRODUCTOS',
                icon: ''    
            },
            {
                text: 'PERFIL',
                icon: '' 
            }
        ]
    }
    render(){
        return <List subheader = {this.renderSubheader()}>
            {this.tabs.map(tab => <Tab tab = {tab}/>)}
        </List>;
    }

    renderSubheader = () => {
        return <ListSubheader>
            <div className = 'sidebar-subheader'>SEGURU</div>
            <Divider className = 'sidebar-divider' variant = 'middle'></Divider>
        </ListSubheader>
    }

    renderTabs = () => {
        this.tabs.forEach(() => {

        })
    }
}

export default Sidebar;
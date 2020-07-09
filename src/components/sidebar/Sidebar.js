import '../../styles/Sidebar.css';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { List, ListSubheader, Divider } from '@material-ui/core';
import { Person, Dashboard, LocalGroceryStore, ExitToApp } from '@material-ui/icons';
import { changePath, logOut, selectTab } from '../../actions';

import Tab from './Tab';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.tabs = [
            {
                text: 'Seguros',
                icon: <Dashboard />,
                action: this.selectContent
            },
            {
                text: 'Perfil',
                icon: <Person />,
                action: this.selectContent
            },
            {
                text: 'Productos',
                icon: <LocalGroceryStore />,
                action: this.selectContent
            },
            {
                text: 'Cerrar Sesión',
                icon: <ExitToApp />,
                action: this.logOut
            }
        ]
    }

    logOut = (index) => {
        this.props.logOut();
        this.props.changePath('')
    }

    selectContent = (index) => {
        this.props.selectTab(index);
    }
    
    render() {
        return <List subheader={this.renderSubheader()}>
            {this.tabs.map((tab, index) => <Tab tab={tab} key={index} focused={this.props.currentIndex === index} index={index} selectTab = {tab.action}/>)}
        </List>;
    }

    renderSubheader = () => {
        return <ListSubheader disableSticky={true}>
            <div className='sidebar-subheader'>SEGURÚ</div>
            <Divider className='sidebar-divider' variant='middle'></Divider>
        </ListSubheader>
    }
}

export default connect(null, { changePath, logOut, selectTab })(Sidebar)
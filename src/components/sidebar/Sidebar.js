import '../../styles/Sidebar.css';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { List, ListSubheader, Divider } from '@material-ui/core';
import { Person, Dashboard, LocalGroceryStore, ExitToApp } from '@material-ui/icons';
import { singUp, changePath } from '../../actions';

import Tab from './Tab';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.tabs = [
            {
                text: 'Seguros',
                icon: <Dashboard />
            },
            {
                text: 'Perfil',
                icon: <Person />
            },
            {
                text: 'Productos',
                icon: <LocalGroceryStore />
            },
            
        ]
        this.logOutTab = {
            text: 'Cerrar Sesión',
            icon: <ExitToApp />
        }
    }
    logOut = () => {
        this.props.changePath('')
    }
    render() {
        return <List subheader={this.renderSubheader()}>
            {this.tabs.map((tab, index) => <Tab tab={tab} key={index} focused={this.props.currentIndex === index} index={index} />)}
            <div  className='logOuIcon' onClick={this.logOut}>
                <Tab tab={this.logOutTab} key={'logOut'} focused={false} />
            </div>
        </List>;
    }

    renderSubheader = () => {
        return <ListSubheader>
            <div className='sidebar-subheader'>SEGURU</div>
            <Divider className='sidebar-divider' variant='middle'></Divider>
        </ListSubheader>
    }
}

const mapStateToProps = state => {
    const { error } = state;
    return {
        error
    }
}

export default connect(mapStateToProps, { singUp, changePath })(Sidebar)
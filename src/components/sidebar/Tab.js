import '../../styles/Tab.css';

import React, {Component, createRef} from 'react';
import {ListItem, ListItemText} from '@material-ui/core';

class Tab extends Component{
    constructor(props){
        super(props);
        this.tabRef = createRef();
    }
    render(){
        return <ListItem 
                button 
                className = {`sidebar-tab`}
                ref = {this.tabRef}
                onClick = {this.handleClick}
                onMouseOver = {this.handleHover}
                onMouseOut = {this.handleMouseOut}
                style = {{backgroundColor: this.props.focused === true? '#ff9800' :'#111111'}}>
                    {this.props.tab.icon}
                    <ListItemText primary = {this.props.tab.text}/>
                </ListItem>;
    }

    handleClick = () => {
        this.props.selectTab(this.props.index);
    }

    handleHover = () => {
        this.tabRef.current.style.backgroundColor = this.props.focused === true? '#ff9800': '#000000';
    }

    handleMouseOut = () => {
        this.tabRef.current.style.backgroundColor = this.props.focused === true? '#ff9800': '#111111';
    }
}

export default Tab;
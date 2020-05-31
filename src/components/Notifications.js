import React, {Component} from 'react';
import {Snackbar} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = (props)  => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Notification extends Component{
    constructor(props){
        super(props);
        this.state = {
            vertical: 'top', 
            horizontal: 'right'
        }
    }

    render(){
        if(this.props.open === true){
            setTimeout(() => {
                this.props.handleClose();
            }, 8000);
        }
        return <Snackbar
                anchorOrigin={{ vertical: this.state.vertical, horizontal: this.state.horizontal}}
                open={this.props.open}
                onClose={this.props.handleClose}
                key={this.state.vertical + this.state.horizontal}
                >
                <Alert severity="error" onClose = {this.props.handleClose}>{this.props.message}</Alert>
                </Snackbar>
    }
}

export default Notification;
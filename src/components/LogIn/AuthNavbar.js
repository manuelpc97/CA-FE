import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../Common/CustomButtons/Button";
import styles from "../../assets/jss/material-dashboard-react/components/headerStyle.js";
import classNames from "classnames";
const useStyles = makeStyles(styles);

export default function AuthNavbar() {
    const classes = useStyles();
    const color = React.useState("blue");
    const appBarClasses = classNames({
        [" " + classes[color]]: color
    });
    return (
        <AppBar className={classes.appBar + appBarClasses}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>
                    <h1 style={{
                        color: 'white',
                        letterSpacing: 30
                    }}>SEGURÚ</h1>
                </div>
            </Toolbar>
        </AppBar>
    )
}

// const mapStateToProp = state => {
//     return {
//         // currentUser: state.user.currentUser,
//         // isAuth: state.user.isAuth,
//         // error: state.error.error,
//         // errorMessage: state.error.message
//     };
// }

// export default connect(mapStateToProp, {})(AuthNavbar)
import '../../styles/InsuranceCard.css';
import React from 'react';
import {connect} from 'react-redux';
import {Grid, CardActionArea, makeStyles} from '@material-ui/core';
import {DriveEta, LocalHospital} from '@material-ui/icons';

import Card from './../Common/Card/Card';
import CardIcon from './../Common/Card/CardIcon';
import CardHeader from './../Common/Card/CardHeader';
import CardFooter from './../Common/Card/CardFooter';

import {selectTab} from './../../actions';


import styles from "./../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

const getIconFromType = (type) => {
    switch(type){
        case 'vehicle':
            return <DriveEta/>;
        case 'medical':
        default: 
            return <LocalHospital/>;
    }
}

const InsuranceCard = (props) => {
    const classes = useStyles();
    return <Grid item xs = {4}>
            <CardActionArea onClick = {() => props.selectTab(2, {insurance: props.insurance})}>
                <Card>
                    <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                            {getIconFromType(props.insurance.type)}
                        </CardIcon>
                        <p className={classes.cardCategory}>{props.insurance.name}</p>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={classes.stats}>
                            Selecciona para ver productos.
                        </div>
                    </CardFooter>
                </Card>
            </CardActionArea>
        </Grid>
}

export default connect(null, {selectTab})(InsuranceCard);
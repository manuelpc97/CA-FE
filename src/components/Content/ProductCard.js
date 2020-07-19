import React from 'react';
import {Grid, makeStyles, CardActionArea} from '@material-ui/core';
import Card from '../Common/Card/Card';
import CardHeader from '../Common/Card/CardHeader';
import CardBody from '../Common/Card/CardBody';

import styles from "./../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

const ProductCard = (props) => {
    const classes = useStyles();
    return <Grid item sm={6}>
                <CardActionArea onClick = {() => props.onSelect(props.product)}>
                    <Card>
                        <CardHeader color="warning">
                             <h4 className={classes.cardTitleWhite}>{props.product.business.name}</h4>
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>{props.product.insurance.name}</h4>
                        </CardBody>
                    </Card>
                </CardActionArea>
        </Grid>
}

export default ProductCard;
import React, {Component} from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import Card from '../Common/Card/Card';
import CardHeader from '../Common/Card/CardHeader';
import CardBody from '../Common/Card/CardBody';
import Table from '../Common/Table/Table';

import styles from "./../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

const ProductChart = (props) => {
    const classes = useStyles();
    return <Grid item sm={6}>
            <Card>
                <CardHeader color="warning">
                    <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                    <p className={classes.cardCategoryWhite}>
                        New employees on 15th September, 2016
                    </p>
                </CardHeader>
                <CardBody>
                    <Table
                        tableHeaderColor="warning"
                        tableHead={["ID", "Name", "Salary", "Country"]}
                        tableData={[
                        ["1", "Dakota Rice", "$36,738", "Niger"],
                        ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                        ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                        ["4", "Philip Chaney", "$38,735", "Korea, South"]
                        ]}
                    />
                </CardBody>
            </Card>
        </Grid>
}

export default ProductChart;
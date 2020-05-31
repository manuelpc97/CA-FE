import '../../styles/ProductChart.css';
import React, { Component } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Card from '../Common/Card/Card';
import CardHeader from '../Common/Card/CardHeader';
import CardBody from '../Common/Card/CardBody';
import Table from '../Common/Table/Table';
import { KeyboardReturn, ContactPhone, NoteAdd } from '@material-ui/icons';
// KeyboardBackspaceOutlined
import styles from "./../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

const ProductChart = (props) => {
    const classes = useStyles();
    const headerButton = [
        {
            text: 'Regresar a Productos',
            icon: <KeyboardReturn style={{ fontSize: 30 }} />,
            action: props.handleBack
        },
        {
            text: 'Contactar Agente',
            icon: <ContactPhone style={{ fontSize: 30 }} />,
            action: () => {}
        },
        {
            text: 'Adquirir con SEGURÚ<',
            icon: <NoteAdd style={{ fontSize: 30 }} />,
            action: () => {}
        },

    ]
    return <Grid item sm={12}>
        <Card>
            <CardHeader color="warning">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h4 className={classes.cardTitleWhite}>{props.product.business.name}</h4>
                            <p className={classes.cardCategoryWhite}>
                                Pago anual de {props.product.yearPayment} L.
                            </p>
                        </div>
                        <div className="col-sm">
                            <div className="row">
                                {headerButton.map((button, index) => {
                                    return (<div className="col-sm cardHeaderButton" key={`hb-${index}`} onClick = {button.action}>
                                        {button.icon}
                                        <p className='cardHeaderButtonLabel'>{button.text}</p>
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <Table
                    tableHeaderColor="warning"
                    tableHead={["#", "Cobertura", "Informacion", "Deducible", "Coaseguro"]}
                    tableData={getTableData(props.product.covers)}
                />
            </CardBody>
        </Card>
    </Grid>
}

const getTableData = (covers) => {
    return covers.map((cover, index) => {
        return getRowData(cover, index);
    })
}

const getRowData = (cover, index) => {
    let row = [];
    row.push(index + 1);
    row.push(cover.title);
    row.push(cover.content);
    row.push(cover.type.toString().toLowerCase() === 'deductible' ? cover.extraInfo : '-');
    row.push(cover.type.toString().toLowerCase() === 'coinsurance' ? cover.extraInfo : '-');
    return row;
}

export default ProductChart;
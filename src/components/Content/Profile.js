import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './../Common/Card/Card';
import { Grid } from '@material-ui/core';
import CardBody from '../Common/Card/CardBody';
import CardHeader from './../Common/Card/CardHeader';
import Table from '../Common/Table/Table';
import FaceIcon from '@material-ui/icons/Face';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DescriptionIcon from '@material-ui/icons/Description';
import { getAllProductsObtained } from './../../actions';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsObtained: [],
            tableData: []
        }
    }
    async componentDidMount() {
        console.log('USER: ', this.props.user);
        await this.props.getAllProductsObtained(this.props.user._id);
        this.getProductsObtained();
        await this.transformTableData();
    }

    getProductsObtained() {
        this.setState({ productsObtained: this.props.productsObtained })
    }
    transformTableData() {
        const { productsObtained } = this.state.productsObtained;
        const tableData = productsObtained.map((product, index) => {
            const { businessName, insuranceName, yearPayment, timestamp } = product;
            return [
                (index += 1),
                businessName,
                insuranceName,
                `${yearPayment} L.`,
                timestamp
            ]
        })
        this.setState({ tableData })
    }

    render() {
        return (
            <Grid container item xs={12} md={12} sm={12} lg={12} spacing={0} >
                <Card>
                    <CardHeader color='warning'>
                        <h3>Perfil en SEGURÚ</h3>
                    </CardHeader>
                    <CardBody>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <img
                                    alt="..."
                                    src="/CA-FE/images/profile/profile.jpg"
                                    width='100%'
                                />
                            </Grid>
                            <Grid item xs={6} style={{ marginTop: '2%', display: 'grid' }}>
                                <Grid item xs={12}>
                                    <p> <PermIdentityIcon />  Nombre: {this.props.user.firstName}</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p> <PermIdentityIcon /> Apellido: {this.props.user.lastName}</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p> <FaceIcon /> Usuario: {this.props.user.username}</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p> <MailOutlineIcon /> Correo: {this.props.user.email}</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p> <PhoneIphoneIcon /> Teléfono: {this.props.user.phone}</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p> <DescriptionIcon /> Pólizas Obtenidas: {this.state.productsObtained.totalProducts} </p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Table
                            tableHeaderColor="warning"
                            tableHead={["#", "Banco", "Producto", "Pago Anual", "Fecha"]}
                            tableData={this.state.tableData}
                        />
                    </CardBody>
                </Card>
            </Grid>
        );
    }
}

const actions = { getAllProductsObtained };

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser,
        productsObtained: state.form.productsObtained,
    }
}

export default connect(mapStateToProps, actions)(Profile);
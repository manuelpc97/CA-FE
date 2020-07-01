import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './../Common/Card/Card';
import { Grid } from '@material-ui/core';
import CardBody from '../Common/Card/CardBody';
import CardHeader from './../Common/Card/CardHeader';
import CardFooter from './../Common/Card/CardFooter';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FaceIcon from '@material-ui/icons/Face';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DescriptionIcon from '@material-ui/icons/Description';

class Profile extends Component {
    componentDidMount() {
        console.log('USER: ', this.props.user);
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
                            {/* <p>{`Bienvenido ${this.props.user}`}</p> */}
                            <Grid item xs={6}>
                                <img
                                    alt="..."
                                    src="/images/profile/profile.jpg"
                                    width='100%'
                                />
                                {/* <div style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <AccountBoxIcon style={{ fontSize: 250, color: 'gray' }} />
                                    </div> */}
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
                                    <p> <DescriptionIcon /> Pólizas Obtenidas: </p>
                                </Grid>
                                {/* <img
                                    alt="..."
                                    src="/images/profile/profile.jpg"
                                    width='50%'
                                /> */}
                            </Grid>
                        </Grid>
                        {/* <p>Pólizas Obtenidas: </p> */}
                    </CardBody>
                </Card>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
}

export default connect(mapStateToProps, {})(Profile);
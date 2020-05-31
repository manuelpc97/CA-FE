import '../../styles/InsuranceCard.css';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Grid, CardActionArea} from '@material-ui/core';
import {DriveEta, LocalHospital} from '@material-ui/icons';

import Card from './../Common/Card/Card';
import CardIcon from './../Common/Card/CardIcon';
import CardHeader from './../Common/Card/CardHeader';

import {selectTab} from './../../actions';

class InsuranceCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <Grid item xs = {4}>
            <CardActionArea onClick = {this.onCardClicked}>
                <Card className = 'card-body'>
                    <CardHeader color = 'warning' stats icon>
                        <CardIcon color = 'warning'>
                            {this.getIconFromType()}
                        </CardIcon>
                        <h3 className = 'card-title'>{this.props.insurance.name}</h3>
                    </CardHeader>
                </Card>
            </CardActionArea>
        </Grid>
    }

    getIconFromType = () => {
        switch(this.props.insurance.type){
            case 'vehicle':
                return <DriveEta/>;
            case 'medical':
            default:
                return <LocalHospital/>;
        }
    }

    onCardClicked = () => {
        this.props.selectTab(2,{insurance: this.props.insurance});
    }

}

export default connect(null, {selectTab})(InsuranceCard);
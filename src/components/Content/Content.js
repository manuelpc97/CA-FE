import '../../styles/Content.css';
import React, {Component} from 'react';
import Insurances from './Insurances';
import Profile from './Profile';
import Products from './Products';

class Content extends Component{
    constructor(props){
        super(props);
        this.contentTypes = ['Seguros', 'Perfil', 'Productos'];
    }

    render(){
        return <div className = 'content-body'>
            {this.renderTitle()}
            {this.renderContent()}
        </div>;
    }

    renderTitle = () => {
        return <div>
            <h2>{this.contentTypes[this.props.index]}</h2>
        </div>
    }

    renderContent = () => {
        switch(this.contentTypes[this.props.index]){
            case 'Seguros':
                return <Insurances params = {this.props.params}/>;
            case 'Perfil':
                return <Profile params = {this.props.params}/>;
            case 'Productos':
                return <Products params = {this.props.params}/>
        }
        return null;
    }
}

export default Content;
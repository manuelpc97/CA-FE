import '../../styles/Content.css';
import React, {Component} from 'react';
import Insurances from './Insurances';
import Profile from './Profile';

class Content extends Component{
    constructor(props){
        super(props);
        this.contentTypes = ['Seguros', 'Perfil'];
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
                return <Insurances/>;
            case 'Perfil':
                return <Profile/>;
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        path: state.navigator.path,
        params: state.navigator.params
    }
}

export default Content;
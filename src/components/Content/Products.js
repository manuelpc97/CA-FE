import React, {Component} from 'react';

class Product extends Component{
    componentDidMount(){
        console.log('PARAMS: ', this.props.params);
    }

    render(){
        return <div>PRODUCTS</div>
    }
}

export default Product;
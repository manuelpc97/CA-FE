import React, {Component} from 'react';

class CoverTable extends Component{
    render(){
        let rows = [];

        if(this.props.covers){
            this.props.covers.forEach((cover, index) => {
                rows.push(this.getCoverRow(cover, index));
            });
        }

        return (
            <table class="table table-striped">
                <thead>
                    {this.getHeaders()}
                </thead>
                <tbody>
                   {rows} 
                </tbody>
            </table>
        );
    }

    getHeaders(){
        let tableHeaders = [];
        tableHeaders.push(<th scope="col">#</th>);
        tableHeaders.push(<th scope="col">Cobertura</th>);
        tableHeaders.push(<th scope="col">Informacion</th>)
        tableHeaders.push(<th scope="col">Deducible</th>)
        tableHeaders.push(<th scope="col">Coaseguro</th>)

        return (<tr>{tableHeaders}</tr>)
    }

    getCoverRow(cover, index){
        let columns = [];
        columns.push(<th scope="row">{index + 1}</th>)
        columns.push(<td>{cover.title}</td>);
        columns.push(<td>{cover.content}</td>);
        columns.push(<td>{cover.type.toString().toLowerCase() === 'deductible'? cover.extraInfo:'-'}</td>)
        columns.push(<td>{cover.type.toString().toLowerCase() === 'coinsurance'? cover.extraInfo:'-'}</td>)
        return <tr>{columns}</tr>
    }
}

export default CoverTable;
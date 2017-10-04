import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import React, { Component } from 'react';
//import Style from './react-bootstrap-table.css';

var products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}];



class Table extends Component {

    render() {
        return (
        <BootstrapTable data={products} striped={ true } hover={ true } condensed={ true }r>
            <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
        );
    }
}

export default Table;

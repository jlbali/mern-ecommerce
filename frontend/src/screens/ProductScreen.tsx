
import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';
import Product from '../models/Product';

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams>{

};

const ProductScreen = (matchRoute: Props) => {
    console.log("Route: ", matchRoute);
    const id = matchRoute.match.params.id;
    const product = products.find((p:Product) => p._id === id ) as Product;


    return (
        <div>
            {product.name}
        </div>
    );
}

export default ProductScreen;

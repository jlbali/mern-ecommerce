import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../products';
import ProductComponent from "../components/ProductComponent";

const HomeScreen = () => {
    return (
        <>
            <h1>Últimos Productos</h1>
            <Row sm={12} md={6} lg={4}>
                {products.map(product => {
                    return (
                        <Col key={product._id}>
                            <ProductComponent product={product} />
                        </Col>
                    )
                })}
            </Row>
        </>
    );
};

export default HomeScreen;




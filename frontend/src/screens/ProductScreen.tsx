
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
        <>
            <Link className="btn btn-light my-3" to="/">
                Volver
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} reviews={product.numReviews} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Stock:
                                    </Col>
                                    <Col>
                                        {product.countInStock}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock ==0}>
                                    {product.countInStock > 0 ? "Agregar al Carrito": "Sin Stock"} .
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
    
            </Row>
        </>
    );
}

export default ProductScreen;

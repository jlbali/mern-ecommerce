import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import Product from '../models/Product';
import Rating from './Rating';

type CardProps = {
    product: Product;
}

const ProductComponent = ( {product}: CardProps) => {
    const reference = "/product/" + product._id;
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={reference}>
                <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={reference}>
                    <Card.Title as="div">
                        <strong>
                            {product.name}
                        </strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} 
                        reviews={product.numReviews}
                        />
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>


            </Card.Body>
        </Card>
    );
}

export default ProductComponent;
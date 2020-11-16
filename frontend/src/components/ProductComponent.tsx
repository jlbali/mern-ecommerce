import React from 'react';
import {Card} from 'react-bootstrap';
import Product from '../models/Product';


type CardProps = {
    product: Product;
}

const ProductComponent = ( {product}: CardProps) => {
    const reference = "/product/" + product._id;
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={reference}>
                <Card.Img src={product.image} variant='top' />
            </a>
            <Card.Body>
                <a href=''>
                    <Card.Title as="div">
                        <strong>
                            {product.name}
                        </strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div className="my-3">
                        {product.rating} from {product.numReviews} reviews.
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
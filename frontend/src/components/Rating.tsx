import React from 'react';

type RatingProps = {
    value: number;
    reviews: number;
    color?: string;
};

const Rating = ({value, reviews, color}: RatingProps) => {
    return (
        <div className="rating">
            <span>
                <i style={{color}}
                className={value >=1 
                ? 'fas fa-star'
                : value >= 0.5 ? 
                'fas fa-star-half-alt': 
                'far fa-star'}></i>
            </span>
            <span>
                <i style={{color}}
                className={value >=2 
                ? 'fas fa-star'
                : value >= 1.5 ? 
                'fas fa-star-half-alt': 
                'far fa-star'}></i>
            </span>
            <span>
                <i style={{color}}
                className={value >=3
                ? 'fas fa-star'
                : value >= 2.5 ? 
                'fas fa-star-half-alt': 
                'far fa-star'}></i>
            </span>
            <span>
                <i style={{color}}
                className={value >=4
                ? 'fas fa-star'
                : value >= 3.5 ? 
                'fas fa-star-half-alt': 
                'far fa-star'}></i>
            </span>
            <span>
                <i style={{color}}
                className={value >=5 
                ? 'fas fa-star'
                : value >= 4.5 ? 
                'fas fa-star-half-alt': 
                'far fa-star'}></i>
            </span>
            <span>
                {reviews} críticas.
            </span>
        </div>

    );

};

Rating.defaultProps = {
    color: 'red'
};

export default Rating;
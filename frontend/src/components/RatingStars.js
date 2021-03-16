import React from 'react';

function RatingStars({rating}) {			
    let ratingIcons=[];
    for(let i = 0; i < rating; i++) {
        ratingIcons.push(<i key={`star-${i}`} className="fa fa-star"></i>);
    }
    for(let i = ratingIcons.length; i < 5; i++) {
        ratingIcons.push(<i key={`empty-star-${i}`} className="fa fa-star-o"></i>);
    }
    return ratingIcons;
}

export default RatingStars;
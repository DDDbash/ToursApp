import React, { useState } from 'react';

const Tour = ({ id, name, image, info, price, deleteTour }) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">Rs. {price}</h4>
                </div>
                <p>
                    {showMore ? info : `${info.substring(0, 180)}...`}
                    <button
                        className="show-more"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </p>
                <button
                    onClick={() => deleteTour(id)}
                    className="delete-btn"
                >
                    Not Interested
                </button>
            </footer>
        </article>
    )
}

export default Tour;
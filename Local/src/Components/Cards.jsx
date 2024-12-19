import React from 'react';

const Cards = ({card}) => {
    const {description,dateline,category,buyer}=card || {}
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={buyer.photo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <h2 className="card-title">{dateline}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default Cards;
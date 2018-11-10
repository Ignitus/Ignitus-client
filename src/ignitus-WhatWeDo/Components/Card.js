import React from 'react';
import { string } from 'prop-types';

const Card = ({ image, title, description }) => (
  <div className="col-lg-3 mx-auto col-sm-5 mb-5 col-8">
  <div className = "card mt-4 shadow"> 
    <div className="flatten-text">
      <img className="mt-2" alt="card" src={image} />
    </div>
    <h5 className="card-title text-center text-dark font-weight-bold mt-3">
      {title}
    </h5>
    <p className="card-text text-center p-4">{description}</p>
  </div>
  </div>
);

Card.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
};

export default Card;

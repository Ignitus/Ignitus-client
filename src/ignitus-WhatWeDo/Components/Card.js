import React from 'react';
import { string } from 'prop-types';

const Card = ({ image, title, description }) => (
  <div className="col-lg-3 mx-auto col-sm-5 mb-5 col-8 card-shadow card">
    <div className="d-flex justify-content-center">
      <img className="card-img-top mt-2 _card" alt="card" src={image} />
    </div>
    <h5 className="card-title text-center text-dark font-weight-bold mt-3">
      {title}
    </h5>
    <p className="card-text text-center p-4">{description}</p>
  </div>
);

Card.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
};

export default Card;

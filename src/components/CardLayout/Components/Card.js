


import React, { Component } from 'react';

const Card= (props) => {
 return ( 
	  <div className="col-lg-3 mx-auto col-sm-5 mb-5 col-8 card-shadow card">
	    <img className = "card-img-top img-fluid  mt-2 _card" alt="card" src={props.image} />
	    <h5 className = "card-title text-center text-dark font-weight-bold mt-3">{props.title}</h5>
	    <p className = "card-text text-center p-4">{props.description}</p>
	  </div>
  );
}

export default Card;
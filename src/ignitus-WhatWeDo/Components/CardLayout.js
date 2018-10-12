import React, { Component } from 'react';
import Card from './Card';
import {data} from './Data'
import '../Styles/style.css';

const CardLayout = () => {
  const html = [...data].map((x, key) => (
    <Card
      key={key}
      image={x.picture}
      title={x.title}
      description={x.description}
    />
  ));

  return (
    <section id="what-we-do">
      <div>
        <div className="bg-white mt-5">
          <div>
            <h1 className="text-center my-5 ignitus-color">
              What will you find at Ignitus?
            </h1>
          </div>
          <div className="col-xs-12 col-md-12 col-sm-12 col-xs-12 mt-5">
            <div className="row">{html}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardLayout;

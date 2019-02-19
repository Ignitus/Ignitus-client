import React from 'react';
import Card from './Card';
import { data } from './Data';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ignitus-Internals';


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
      <div className="mt-2">
        <div>
          <h1 className="text-center ignitus-color">
            What we provide?
          </h1>
        </div>
        <div className="col-xs-12 col-md-12 col-sm-12 col-xs-12 mt-5 mx-40">
          <div className="provide-card-row">{html}</div>
        </div>
      </div>
    </section>
  );
};

export default withErrorBoundary(CardLayout);

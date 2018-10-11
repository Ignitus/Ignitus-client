import React from 'react';
import Intern from '../../Assets/Images/Cards/intern1.png';
import Offer from '../../Assets/Images/Cards/offer1.png';
import Expert from '../../Assets/Images/Cards/expert1.png';
import Card from './Card';
import '../Styles/style.css';

const CardLayout = () => {
  const data = [
    {
      image: Intern,
      title: 'Internships',
      description:
        "Top quality 'Ignitus-Exclusive' internships and freelance work with professors, researchers, companies and professionals from selected desinations.",
    },
    {
      image: Offer,
      title: 'Courses',
      description:
        'Unique, well researched and goal-oriented courses designed to boost relevant skill acquisition with minimal effort and time.',
    },
    {
      image: Expert,
      title: 'Community of Experts',
      description:
        'Guidance from an unparalleled network of professors, experts and industry professionals supervising internal projects with selected students.',
    },
  ];
  // I would suggest not giving these cards a hover effect because it implies that they are links
  const html = [...data].map(x => (
    <Card
      key={x.title}
      image={x.image}
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

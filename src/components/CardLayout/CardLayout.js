import React, { Component } from "react";
import Intern from "../../Images/Cards/intern1.png";
import Offer from "../../Images/Cards/offer1.png";
import Expert from "../../Images/Cards/expert1.png";
import Card from "./Components/Card";
import "./card_component.css";

class CardLayout extends Component {
  render() {
    const data = [
      {
        image: Intern,
        title: "Internships",
        description:
          "Top quality 'Ignitus-Exclusive' internships and freelance work with professors, researchers, companies and professionals from selected desinations"
      },
      {
        image: Offer,
        title: "Courses",
        description:
          "Unique, well researched and goal-oriented courses designed to boost relevant skill acquisition with minimal effort and time."
      },
      {
        image: Expert,
        title: "Experts Community",
        description:
          "Guidance from an unparalleled network of professors,experts and industry professionals supervising internal projects with selected students"
      }
    ];

    let _html = [...data].map((x, key) => {
      return (
        <Card
          key={key}
          image={x.image}
          title={x.title}
          description={x.description}
        />
      );
    });

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
              <div className="row">{_html}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CardLayout;

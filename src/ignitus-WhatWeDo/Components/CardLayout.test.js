import React from "react";
import { shallow } from "enzyme";
import CardLayout from "./CardLayout";
import Card from './Card';
import Data from '../../Data/data-card-layout';

describe("CardLayout", () => {
  test("should render cards according to data", () => {
    const wrapper = shallow(<CardLayout data={Data}/>);
    expect(wrapper.find(Card)).toHaveLength(3);
  });
});

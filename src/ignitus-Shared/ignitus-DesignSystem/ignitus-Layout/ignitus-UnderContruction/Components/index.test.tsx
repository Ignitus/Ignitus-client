import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer from 'jest-emotion';
import { WebsiteUnderConstruction } from './index';
import * as S from '../styles';
import { Heading3, Paragraph } from '../../../ignitus-Atoms/typography';

let wrapper;

expect.addSnapshotSerializer(emotionSerializer);

describe('<WebsiteUnderConstruction />', () => {
  beforeEach(() => {
    wrapper = mount(<WebsiteUnderConstruction />);
  });

  it('should render', () => {
    wrapper = render(<WebsiteUnderConstruction />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Img, Heading, Paragraph components', () => {
    expect(wrapper.find(S.Img).length).toBe(1);
    expect(wrapper.find(Heading3).length).toBe(1);
    expect(wrapper.find(Paragraph).length).toBe(2);
  });
});

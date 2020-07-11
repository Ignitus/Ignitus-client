import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import { BtnWithIcon, Opportunity } from './index';
import * as S from '../styles';

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

it('should render', () => {
  const tree = render(<Opportunity />);
  expect(tree).toMatchSnapshot();
});

describe('<Opportunity />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Opportunity />);
  });

  it('should render BtnWithIcon', () => {
    expect(wrapper.find(BtnWithIcon).length).toBe(1);
    expect(wrapper.find(S.BtnContainerIcon).length).toBe(1);
    expect(wrapper.find(S.BtnContainerText).length).toBe(1);
  });

  it('should render Opportunity', () => {
    wrapper = mount(<Opportunity />);

    expect(wrapper.find(Opportunity).length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find(S.OpportunityTitle).length).toEqual(1);
    expect(wrapper.find(S.OpportunityData).length).toEqual(1);
    expect(wrapper.find(S.OpportunitySubTitle).length).toEqual(1);
    expect(wrapper.find(S.OpportunityDescription).length).toEqual(1);
  });
});

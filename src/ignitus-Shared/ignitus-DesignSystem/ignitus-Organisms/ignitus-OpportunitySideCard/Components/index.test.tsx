import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import { InfoCard, Card } from './index';

import { CardType, OpportunityType } from '../types';
import * as S from '../styles';
import { Paragraph } from '../../../ignitus-Atoms/typography';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

const props: CardType = {
  location: 'Australia',
  commitment: 'Full-time',
  salary: '24',
};

const cardProps: OpportunityType = {
  title: 'Location',
  description: 'Australia',
};

const mockClickProp = {
  handleClick: jest.fn(),
};

const ButtonProp = {
  size: 'large',
  category: 'primary',
  onClick: mockClickProp.handleClick,
};

it('should rendered', () => {
  const tree = render(<InfoCard {...props} />);
  expect(tree).toMatchSnapshot();
});

describe('<InfoCard />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<InfoCard {...props} />);
  });

  it('should render Cards', () => {
    expect(wrapper.find(Card).length).toBe(3);
    expect(
      wrapper
        .find(Card)
        .at(0)
        .prop('title'),
    ).toBe('Location');
    expect(
      wrapper
        .find(Card)
        .at(0)
        .prop('description'),
    ).toBe(props.location);
    expect(
      wrapper
        .find(Card)
        .at(1)
        .prop('title'),
    ).toBe('Commitment');
    expect(
      wrapper
        .find(Card)
        .at(1)
        .prop('description'),
    ).toBe(props.commitment);
    expect(
      wrapper
        .find(Card)
        .at(2)
        .prop('title'),
    ).toBe('Salary');
    expect(
      wrapper
        .find(Card)
        .at(2)
        .prop('description'),
    ).toBe(props.salary);
  });

  it('should render ButtonWrapper', () => {
    expect(wrapper.find(S.ButtonsWrapper).length).toBe(1);
    expect(wrapper.find(S.Button).length).toBe(3);
    expect(
      wrapper
        .find(S.Button)
        .at(0)
        .find('svg').length,
    ).toBe(1);
    expect(
      wrapper
        .find(S.Button)
        .at(0)
        .text(),
    ).toBe('Check IconApply');
    expect(wrapper.find(S.ApplyStatus).length).toBe(1);
    expect(wrapper.find(S.ApplyStatus).prop('name')).toBe(AppIcon.CheckIcon);
    expect(
      wrapper
        .find(S.Button)
        .at(1)
        .text(),
    ).toBe('Save');
    expect(wrapper.find(S.Share).length).toBe(1);
    expect(wrapper.find(S.Share).prop('name')).toBe(AppIcon.ShareIcon);
    expect(
      wrapper
        .find(S.Button)
        .at(2)
        .text(),
    ).toBe('ShareIconShare Link');
  });

  it('should call handleClick once', () => {
    wrapper = mount(<S.Button {...{ ...ButtonProp }} />);
    wrapper
      .find(S.Button)
      .at(0)
      .simulate('click');
    expect(mockClickProp.handleClick).toBeCalledTimes(1);
  });
});

describe('<Card />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Card {...cardProps} />);
  });
  it('should render Wrapper', () => {
    expect(wrapper.find(S.Wrapper).length).toBe(1);
    expect(wrapper.find(S.Heading).length).toBe(1);
    expect(wrapper.find(S.Heading).text()).toBe(cardProps.title);
    expect(wrapper.find(Paragraph).text()).toBe(cardProps.description);
  });
});

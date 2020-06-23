import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import { ModalShare } from './index';
import { Heading1, DefaultIconInput } from '../../../../..';
import * as O from '../styles';
import { GreyOne } from '../../../../ignitus-Atoms/colors';
import * as C from '../../../../ignitus-Atoms/colors';

const props = {
  title: 'title',
  Share: '',
  Link: '',
  LinkedinColor: C.LinkedinIconColor,
  TwitterColor: C.TwitterIconColor,
  RedditColor: C.RedditIconColor,
  FacebookColor: C.FacebookIconColor,
  White: C.White,
  GreyOne: C.GreyOne,
};

let wrapper;

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

describe('<ModalShare />', () => {
  beforeEach(() => {
    wrapper = mount(<ModalShare {...props} />);
  });

  it('should render', () => {
    wrapper = render(<ModalShare {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render StyledIcon, DefaultIconInput', () => {
    expect(wrapper.find(O.StyledIcon).length).toBe(5);
    expect(wrapper.find(DefaultIconInput).length).toBe(1);
  });

  it('should render colors of StyledIcon, IconsContainer as passed in props', () => {
    expect(
      wrapper
        .find(O.StyledIcon)
        .at(0)
        .prop('color'),
    ).toBe(GreyOne);
    expect(
      wrapper
        .find(O.IconContainer)
        .at(0)
        .prop('color'),
    ).toBe(props.White);
    expect(
      wrapper
        .find(O.IconContainer)
        .at(1)
        .prop('color'),
    ).toBe(props.FacebookColor);
    expect(
      wrapper
        .find(O.IconContainer)
        .at(2)
        .prop('color'),
    ).toBe(props.RedditColor);
    expect(
      wrapper
        .find(O.IconContainer)
        .at(3)
        .prop('color'),
    ).toBe(props.TwitterColor);
    expect(
      wrapper
        .find(O.IconContainer)
        .at(4)
        .prop('color'),
    ).toBe(props.LinkedinColor);
  });

  it('should render text as passed in props', () => {
    expect(wrapper.find(Heading1).text()).toBe(props.title);
    expect(
      wrapper
        .find(O.Paragraph)
        .at(0)
        .text(),
    ).toBe(props.Link);
    expect(
      wrapper
        .find(O.Paragraph)
        .at(1)
        .text(),
    ).toBe(props.Share);
  });
});

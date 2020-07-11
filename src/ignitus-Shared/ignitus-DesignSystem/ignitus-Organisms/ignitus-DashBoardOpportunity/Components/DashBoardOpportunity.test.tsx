import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import { DashBoardOpportunity, Card } from './DashBoardOpportunity';
import { Opportunity } from '../types';
import * as S from '../style';

const props: Opportunity = {
  title: 'Title',
  description: 'Description',
  subtitle: 'subtitle',
  src:
    'https://storage.googleapis.com/ignitus_assets/ig-opportunities/universityOfMelbourne.png',
};

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

it('should rendered', () => {
  const tree = render(<DashBoardOpportunity {...props} />);
  expect(tree).toMatchSnapshot();
});

describe('<DashBoardOpportunity />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<DashBoardOpportunity {...props} />);
  });

  it('should render Card component', () => {
    expect(wrapper.find(Card).length).toEqual(1);
    expect(wrapper.find('img').prop('src')).toEqual(props.src);
    expect(wrapper.find('img').prop('alt')).toEqual(props.title);
    expect(wrapper.find(S.Title).text()).toEqual(props.title);
    expect(wrapper.find(S.SubTitle).text()).toEqual(props.subtitle);
    expect(wrapper.find(S.Description).text()).toEqual(props.description);
  });
});

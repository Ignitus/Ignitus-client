import React from 'react';
import { render } from 'enzyme';
import emotionSerializer from 'jest-emotion';
import { WebsiteUnderConstruction } from './index';

expect.addSnapshotSerializer(emotionSerializer);

describe('<WebsiteUnderConstruction />', () => {
  it('should render', () => {
    const wrapper = render(<WebsiteUnderConstruction />);
    expect(wrapper).toMatchSnapshot();
  });
});

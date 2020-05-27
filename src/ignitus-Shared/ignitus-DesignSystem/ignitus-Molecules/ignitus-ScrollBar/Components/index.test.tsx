import React from 'react';
import { render } from 'enzyme';
import emotionSerializer from 'jest-emotion';
import { ScrollBar } from './index';

expect.addSnapshotSerializer(emotionSerializer);

describe('<ScrollBar />', () => {
  it('should render', () => {
    const wrapper = render(<ScrollBar />);
    expect(wrapper).toMatchSnapshot();
  });
});

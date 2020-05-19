import React from 'react';
import { render } from 'enzyme';
import emotionSerializer from 'jest-emotion';
import { Notfound } from './index';

expect.addSnapshotSerializer(emotionSerializer);

describe('<Notfound />', () => {
  it('should render', () => {
    const wrapper = render(<Notfound />);
    expect(wrapper).toMatchSnapshot();
  });
});

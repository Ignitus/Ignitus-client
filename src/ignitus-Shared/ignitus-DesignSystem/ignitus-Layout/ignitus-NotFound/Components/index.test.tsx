import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import emotionSerializer from 'jest-emotion';
import { Notfound } from './index';

expect.addSnapshotSerializer(emotionSerializer);

describe('<Notfound />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Router>
        <Notfound />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { mount, render } from 'enzyme';

import { DefaultMultiMediaInput } from './index';

const props = {
  placeholder: 'Placeholder',
  name: 'Name',
  maxHeightOfInput: 200,
};

it('should render', () => {
  const tree = render(<DefaultMultiMediaInput {...props} />);
  expect(tree).toMatchSnapshot();
});

describe('<DefaultMultiMediaInput />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<DefaultMultiMediaInput {...props} />);
  });

  it('should contain buttons & textarea', () => {
    // one button with text Post
    expect(wrapper.findWhere(n => n.text() === 'Post').length).toBe(1);

    // other 5 buttons with svg
    expect(wrapper.find('button svg').length).toBe(5);
    expect(wrapper.find('textarea').length).toBe(1);
  });
});

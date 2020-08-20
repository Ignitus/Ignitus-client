import React from 'react';
import { render } from 'enzyme';

import { Loader } from './index';

it('should render', () => {
  const tree = render(<Loader />);
  expect(tree).toMatchSnapshot();
});

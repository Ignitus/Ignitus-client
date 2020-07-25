import React from 'react';
import { render } from 'enzyme';
import { CoreTeam } from './index';
// import { Data } from '../constants';

it('should be rendered', () => {
  const tree = render(<CoreTeam />);
  expect(tree).toMatchSnapshot();
});

describe('<CoreTeam />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<CoreTeam />);
  });

  it('should render correct title', () => {
    expect(wrapper.find('h2').text()).toBe(' Our Team ');
  });

  // it('should render correct core team data', () => {
  //   expect(wrapper.find('TestItem').length).toBe(Data.length);
  //   Data.forEach((val: any, index: number) => {
  //     expect(
  //       wrapper
  //         .find('img')
  //         .at(index)
  //         .props().item === val,
  //     );
  //   });
  // });
});

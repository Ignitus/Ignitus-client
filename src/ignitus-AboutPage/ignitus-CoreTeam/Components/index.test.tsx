import React from 'react';
import { render } from 'enzyme';
import { CoreTeam } from './index';
// import { Data } from '../constants';

React.useLayoutEffect = React.useEffect;

it('should be rendered', () => {
  const tree = render(<CoreTeam />);
  expect(tree).toMatchSnapshot();
});

// describe('<CoreTeam />', () => {
// let wrapper;
// beforeEach(() => {
//   wrapper = mount(<CoreTeam />);
// });

// it('should render correct title', () => {
//   expect(wrapper.find('h2').text()).toBe(' Our Team ');
// });

// it('should render correct core team data', () => {
//   console.log('Team: ', wrapper.find('TeamItem').length);
//   expect(wrapper.find('TeamItem').length).toBe(Data.length);
//   Data.forEach((val: any, index: number) => {
//     expect(
//       wrapper
//         .find('TeamItem')
//         .at(index)
//         .props().item === val,
//     );
//   });
// });
// });

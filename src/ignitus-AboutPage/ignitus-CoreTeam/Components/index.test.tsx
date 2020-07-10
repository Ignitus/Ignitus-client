import React from 'react';
import { render, mount } from 'enzyme';
import { CoreTeam } from './index';
import { Data } from '../constants';

React.useLayoutEffect = React.useEffect;

let wrapper;
beforeEach(() => {
  wrapper = mount(<CoreTeam />);
});

describe('<CoreTeam />', () => {
  it('should be rendered', () => {
    const tree = render(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('should render correct title', () => {
    expect(wrapper.find('h2').text()).toBe(' Our Team ');
  });

  it('should render correct core team data correctly', () => {
    expect(wrapper.find('TeamItem').length).toBe(Data.length);
    Data.forEach((val: any, index: number) => {
      expect(
        wrapper
          .find('TeamItem')
          .at(index)
          .props().item === val,
      );
    });
  });
});

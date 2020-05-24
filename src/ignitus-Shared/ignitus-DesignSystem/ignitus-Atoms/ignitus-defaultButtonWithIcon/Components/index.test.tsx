import React from 'react';
import { mount, render } from 'enzyme';

import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import { DefaultButtonWithIcon } from './index';

import AccountCircleIcon from '../../../ignitus-Assets/ignitus-Icons/accountCircleIcon';
import AngelListIcon from '../../../ignitus-Assets/ignitus-Icons/angelListIcon';

const props = {
  size: '50px',
  category: 'None',
  name: AppIcon.AccountCircleIcon,
  content: 'Content',
};

let wrapper;
beforeEach(() => {
  wrapper = mount(<DefaultButtonWithIcon {...props} />);
});

describe('<DefaultButtonWithIcon />', () => {
  it('should rendered', () => {
    const tree = render(<DefaultButtonWithIcon {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render required html tag(s)', () => {
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button svg').length).toBe(1);
  });

  it('should render given icon', () => {
    expect(wrapper.find(AccountCircleIcon).length).toBe(1);

    wrapper = mount(
      <DefaultButtonWithIcon {...{ ...props, name: AppIcon.AngelListIcon }} />,
    );

    expect(wrapper.find(AngelListIcon).length).toBe(1);
  });
});

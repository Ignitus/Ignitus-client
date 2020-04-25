/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { mount } from 'enzyme';

import { Link } from './index';

const nr = 'noreferrer';
const no = 'noopener';

describe('<Link>', () => {
  it('renders a tag', () => {
    const wrapper = mount(<Link>Link</Link>);

    expect(wrapper.find('a').length).toBe(1);
  });

  it('set rel="noreferrer" for any url other than ignitus.org', () => {
    const wrapper = mount(<Link href="#">Link</Link>);
    const wrapperIgnitus = mount(
      <Link href="https://ignitus.org/interface">UI Kit</Link>,
    );

    expect(wrapper.find('a').props().rel).toBe(nr);
    expect(wrapperIgnitus.find('a').props().rel).toBe('');
  });

  it('set rel="noopener" when target is _blank', () => {
    const wrapper = mount(
      <Link href="#" target="_blank">
        Link
      </Link>,
    );

    expect(wrapper.find('a').props().rel).toBe(`${nr} ${no}`);
  });
});

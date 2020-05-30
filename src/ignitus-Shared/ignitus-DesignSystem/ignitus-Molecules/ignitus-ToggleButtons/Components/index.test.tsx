import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';

import { ToggleButton, ToggleIconButton } from './index';
import { ToggleButtonProps, ToggleIconButtonProps } from '../types';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import { StyledIcon } from '../styles';
import { IgnitusBlue } from '../../../..';

const propsButton: ToggleButtonProps = {
  leftLabel: 'left',
  rightLabel: 'right',
};

const propsButtonIcon: ToggleIconButtonProps = {
  leftIcon: AppIcon.GridIcon,
  rightIcon: AppIcon.BarsIcon,
};

const propsStyledIcon = {
  name: AppIcon.GridIcon,
  color: `${IgnitusBlue}`,
};

const colorCheck = () => {
  const Icon = mount(<StyledIcon {...propsStyledIcon} />);
  expect(Icon).toHaveStyleRule('fill', propsStyledIcon.color);
};

let wrapper;

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

describe('<ToggleButton />', () => {
  beforeEach(() => {
    wrapper = mount(<ToggleButton {...propsButton} />);
  });

  it('should render', () => {
    wrapper = render(<ToggleButton {...propsButton} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ToggleButton with correct labels', () => {
    expect(
      wrapper
        .find('button')
        .at(0)
        .text()
        .trim(),
    ).toBe(propsButton.leftLabel);
    expect(
      wrapper
        .find('button')
        .at(1)
        .text()
        .trim(),
    ).toBe(propsButton.rightLabel);
  });
});

describe('<ToggleIconButton />', () => {
  beforeEach(() => {
    wrapper = mount(<ToggleIconButton {...propsButtonIcon} />);
  });

  it('should render', () => {
    wrapper = render(<ToggleIconButton {...propsButtonIcon} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ToggleButtonIcon with correct icons', () => {
    expect(
      wrapper
        .find(StyledIcon)
        .at(0)
        .prop('name'),
    ).toBe(propsButtonIcon.leftIcon);
    expect(
      wrapper
        .find(StyledIcon)
        .at(1)
        .prop('name'),
    ).toBe(propsButtonIcon.rightIcon);
  });

  it('should render StyledIcon with color passed in prop', colorCheck);
});

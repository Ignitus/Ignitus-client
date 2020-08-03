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

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

it('should rendered', () => {
  const tree = render(<ToggleButton {...propsButton} />);
  expect(tree).toMatchSnapshot();
});

describe('<ToggleButton />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ToggleButton {...propsButton} />);
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

it('should rendered', () => {
  const tree = render(<ToggleIconButton {...propsButtonIcon} />);
  expect(tree).toMatchSnapshot();
});

describe('<ToggleIconButton />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ToggleIconButton {...propsButtonIcon} />);
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

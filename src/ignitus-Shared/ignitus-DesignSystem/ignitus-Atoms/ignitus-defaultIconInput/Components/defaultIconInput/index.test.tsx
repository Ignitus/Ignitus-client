import React from 'react';
import { mount, render } from 'enzyme';

import { AppIcon } from '../../../../..';
import { DefaultIconInput } from './index';
import { CopyIcon } from '../../../../ignitus-Assets/ignitus-Icons/copyIcon';
import { CreateIcon } from '../../../../ignitus-Assets/ignitus-Icons/createIcon';

const props = {
  state: 'copy',
  name: AppIcon.CopyIcon,
  type: 'text',
  placeholder: 'Paste URL Here',
  handleClick: jest.fn(),
  handleChange: jest.fn(),
};

let wrapper;
const input = 'input[type="text"]';
beforeEach(() => {
  wrapper = mount(<DefaultIconInput {...props} />);
});

describe('<DefaultIconInput />', () => {
  it('should rendered', () => {
    wrapper = render(<DefaultIconInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render input & Icon passed in prop', () => {
    expect(wrapper.find(input).length).toBe(1);
    expect(wrapper.find(CopyIcon).length).toBe(1);

    wrapper = mount(
      <DefaultIconInput {...{ ...props, name: AppIcon.CreateIcon }} />,
    );
    expect(wrapper.find(input).length).toBe(1);
    expect(wrapper.find(CreateIcon).length).toBe(1);
  });

  it('should call handleClick with input value', () => {
    wrapper.find(CopyIcon).simulate('click');
    expect(props.handleClick).toBeCalledWith('');

    wrapper.find(input).simulate('change', { target: { value: 'foo' } });
    wrapper.find(CopyIcon).simulate('click');
    expect(props.handleClick).toBeCalledWith('foo');
  });

  it('should call handleChange with input value', () => {
    wrapper.find(input).simulate('change', { target: { value: 'foo' } });
    expect(props.handleChange).toBeCalledWith('foo');
  });
});

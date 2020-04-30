import React from 'react';
import { mount, render } from 'enzyme';

import { DefaultPasswordInput } from './index';
import { KeyIcon } from '../../../../ignitus-Assets/ignitus-Icons/keyIcon';
import { EyeVisibleOffIcon } from '../../../../ignitus-Assets/ignitus-Icons/eyeVisibleOffIcon';
import { EyeVisibleOnIcon } from '../../../../ignitus-Assets/ignitus-Icons/eyeVisibleOnIcon';

const props = {
  placeholder: 'Placeholder',
  state: 'state',
  handleChange: jest.fn(),
};

let wrapper;
const inputText = 'input[type="text"]';
const inputPassword = 'input[type="password"]';

beforeEach(() => {
  wrapper = mount(<DefaultPasswordInput {...props} />);
});

describe('<DefaultPasswordInput />', () => {
  it('should render', () => {
    wrapper = render(<DefaultPasswordInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render key Icon & EyeVisibleOff(initial)', () => {
    expect(wrapper.find(KeyIcon).length).toBe(1);
    expect(wrapper.find(EyeVisibleOffIcon).length).toBe(1);
  });

  it('should render input type password', () => {
    expect(wrapper.find(inputPassword).length).toBe(1);
  });

  it('should render input with value of state', () => {
    expect(wrapper.find(inputPassword).props().value).toBe(props.state);
  });

  it('should toggle EyeVisible icons on Click', () => {
    wrapper.find(EyeVisibleOffIcon).simulate('click');
    expect(wrapper.find(EyeVisibleOffIcon).length).toBe(0);
    expect(wrapper.find(EyeVisibleOnIcon).length).toBe(1);
    // input type should also be text
    expect(wrapper.find(inputPassword).length).toBe(0);
    expect(wrapper.find(inputText).length).toBe(1);
  });

  it('should handle change event correctly', () => {
    wrapper
      .find(inputPassword)
      .simulate('change', { target: { value: 'password' } });
    expect(props.handleChange).toBeCalledWith('password');
  });
});

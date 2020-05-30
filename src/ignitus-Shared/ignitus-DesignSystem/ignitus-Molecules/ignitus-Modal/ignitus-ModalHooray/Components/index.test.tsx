import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
<<<<<<< HEAD:src/ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/ignitus-Modal/ignitus-ModalHooray/Components/index.test.tsx
import { ModalHooray } from './index';
=======
import { Modal } from './index';
>>>>>>> 1182378a5167db5087487ac911ba9a62b2a417a1:src/ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/ignitus-Modal/Components/index.test.tsx

const props = {
  title: 'Title',
  primaryText: 'primary text',
  secondaryText: 'secondary text',
  buttonText: 'button text',
};

let wrapper;

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

describe('<Modal />', () => {
  beforeEach(() => {
<<<<<<< HEAD:src/ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/ignitus-Modal/ignitus-ModalHooray/Components/index.test.tsx
    wrapper = mount(<ModalHooray {...props} />);
  });

  it('should render', () => {
    wrapper = render(<ModalHooray {...props} />);
=======
    wrapper = mount(<Modal {...props} />);
  });

  it('should render', () => {
    wrapper = render(<Modal {...props} />);
>>>>>>> 1182378a5167db5087487ac911ba9a62b2a417a1:src/ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/ignitus-Modal/Components/index.test.tsx
    expect(wrapper).toMatchSnapshot();
  });

  it('should render button, h1, p tags', () => {
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('p').length).toBe(2);
  });

  it('should render values passed in props properly', () => {
    expect(wrapper.find('h1').text()).toEqual(`${props.title}`);
    expect(
      wrapper
        .find('p')
        .at(0)
        .text(),
    ).toEqual(`${props.primaryText}`);
    expect(
      wrapper
        .find('p')
        .at(1)
        .text(),
    ).toEqual(`${props.secondaryText}`);
    expect(wrapper.find('button').text()).toEqual(` ${props.buttonText}`);
  });
});

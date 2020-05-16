import React from 'react';
import { mount, render } from 'enzyme';
import emotionSerializer, { matchers } from 'jest-emotion';
import { UserProfileCard, IconContent, DropDownButton } from './index';
import * as S from '../styles';
import { Props } from '../types';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';

const props: Props = {
  content: 'Send Message',
  name: AppIcon.QuestionAnswerIcon,
};

let wrapper;

expect.addSnapshotSerializer(emotionSerializer);
expect.extend(matchers);

describe('<UserProfileCard />', () => {
  beforeEach(() => {
    wrapper = mount(<UserProfileCard />);
  });

  it('should render', () => {
    wrapper = render(<UserProfileCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Icon, Paragraph, Avatar', () => {
    expect(wrapper.find(S.Icon).length).toBe(8);
    expect(wrapper.find(IconContent).length).toBe(3);
    expect(wrapper.find(S.Paragraph).length).toBe(4);
    expect(wrapper.find(S.Avatar).length).toBe(1);
  });

  it('should render IconContent correctly', () => {
    wrapper = mount(<IconContent {...props} />);

    expect(wrapper.find(S.Paragraph).text()).toBe(props.content);
    expect(wrapper.find(S.Icon).prop('name')).toBe(props.name);
  });

  it('should render DropDownButton correctly', () => {
    wrapper = mount(<DropDownButton />);

    expect(wrapper.find(S.DropDownMenuListItem).length).toBe(3);
    expect(wrapper.find(S.DropDownBtn).length).toBe(1);
  });
});

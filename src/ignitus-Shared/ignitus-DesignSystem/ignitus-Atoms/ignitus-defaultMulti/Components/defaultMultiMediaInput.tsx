import React from 'react';
import {InputTypes} from '../types';
import {AppIcon} from '../../../../types/iconsTypes/iconEnums';
import * as I from '../styles';

const DefaultMultiMediaInput = ({placeholder, name}: InputTypes) => (
  <React.Fragment>
    <I.InputContainer>
      <I.container1>
        <I.Input placeholder={placeholder} name={name} />
      </I.container1>
      <I.container2>
        <I.IconsContainer>
          <I.IconCon>
            <I.StyledIcon name={AppIcon.LibraryBooksIcon} />
          </I.IconCon>
          <I.IconCon>
            <I.StyledIcon2 name={AppIcon.PollIcon} />
          </I.IconCon>
          <I.IconCon>
            <I.StyledIcon name={AppIcon.PdfIcon} />
          </I.IconCon>
          <I.IconCon>
            <I.StyledIcon2 name={AppIcon.VideoLibIcon} />
          </I.IconCon>
          <I.IconCon>
            <I.StyledIcon name={AppIcon.CameraIcon} />
          </I.IconCon>
        </I.IconsContainer>
        <I.Button> Post </I.Button>
      </I.container2>
    </I.InputContainer>
  </React.Fragment>
);

export default DefaultMultiMediaInput;

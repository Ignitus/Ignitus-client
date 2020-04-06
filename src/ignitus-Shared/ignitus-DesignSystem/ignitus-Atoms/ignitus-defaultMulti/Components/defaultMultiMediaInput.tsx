import React from 'react';
import {InputTypes} from '../types';
import {AppIcon} from '../../../../types/iconsTypes/iconEnums';
import * as I from '../styles';

const DefaultMultiMediaInput = ({placeholder, name}: InputTypes) => (
  <React.Fragment>
    <I.InputContainer>
      <I.TopContainer>
        <I.Input placeholder={placeholder} name={name} />
      </I.TopContainer>
      <I.BottomContainer>
        <I.IconsContainer>
          <I.IconCon>
            <I.Icon name={AppIcon.LibraryBooksIcon} />
          </I.IconCon>
          <I.IconCon>
            <I.Icon name={AppIcon.PollIcon} />
          </I.IconCon>
          <I.IconCon>
            <I.Icon name={AppIcon.PdfIcon} />
          </I.IconCon>
          <I.IconCon>
            <I.Icon name={AppIcon.VideoLibIcon} />
          </I.IconCon>
          <I.IconCon>
            <I.Icon name={AppIcon.CameraIcon} />
          </I.IconCon>
        </I.IconsContainer>
        <I.Button category="primary" size="medium">
          {' '}
          Post
        </I.Button>
      </I.BottomContainer>
    </I.InputContainer>
  </React.Fragment>
);

export default DefaultMultiMediaInput;

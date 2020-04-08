import React from 'react';
import {InputTypes} from '../types';
import {AppIcon} from '../../../../types/iconsTypes/iconEnums';
import * as I from '../styles';
import { Button } from '../../buttons';

const DefaultMultiMediaInput = ({placeholder, name}: InputTypes) => (
  <React.Fragment>
    <I.InputContainer>
      <I.TopContainer>
        <I.Input placeholder={placeholder} name={name} />
      </I.TopContainer>
      <I.BottomContainer>
        <I.IconsContainer>
          <I.IconContainer>
            <I.Icon name={AppIcon.LibraryBooksIcon} />
          </I.IconContainer>
          <I.IconContainer>
            <I.Icon name={AppIcon.PollIcon} />
          </I.IconContainer>
          <I.IconContainer>
            <I.Icon name={AppIcon.PdfIcon} />
          </I.IconContainer>
          <I.IconContainer>
            <I.Icon name={AppIcon.VideoLibIcon} />
          </I.IconContainer>
          <I.IconContainer>
            <I.Icon name={AppIcon.CameraIcon} />
          </I.IconContainer>
        </I.IconsContainer>
        <Button category="primary" size="medium">
          {' '}
          Post
        </Button>
      </I.BottomContainer>
    </I.InputContainer>
  </React.Fragment>
);

export default DefaultMultiMediaInput;

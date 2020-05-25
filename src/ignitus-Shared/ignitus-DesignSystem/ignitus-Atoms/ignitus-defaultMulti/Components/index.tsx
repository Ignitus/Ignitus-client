import React from 'react';
import { InputTypes } from '../types';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import * as I from '../styles';

export const DefaultMultiMediaInput = ({
  placeholder,
  name,
  maxHeightOfInput = 200,
  initialHeight,
}: InputTypes) => {
  let overflowVisible = false;

  const setOverflowVisible = e => {
    e.target.style.overflow = 'visible';
    overflowVisible = true;
  };

  const setOverflowHidden = e => {
    e.target.style.overflow = 'hidden';
    overflowVisible = false;
  };

  const setHeight = e => {
    if (e.target.scrollHeight > maxHeightOfInput) {
      if (!overflowVisible) {
        setOverflowVisible(e);
        e.target.style.height = `${maxHeightOfInput}px`;
      }
    } else {
      e.target.style.height = 'auto';
      if (overflowVisible) setOverflowHidden(e);
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  return (
    <React.Fragment>
      <I.InputContainer>
        <I.TopContainer>
          <I.Input
            placeholder={placeholder}
            name={name}
            onChange={setHeight}
            initialHeight={initialHeight}
          />
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
          <I.Button category="primary" size="medium">
            {' '}
            Post
          </I.Button>
        </I.BottomContainer>
      </I.InputContainer>
    </React.Fragment>
  );
};

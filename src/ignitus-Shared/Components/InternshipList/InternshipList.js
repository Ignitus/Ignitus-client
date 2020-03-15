/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as S from './index';

export default function InternshipList() {
  return (
    <S.ListContainer>
      <InternshipListItem />
      <InternshipListItem />
    </S.ListContainer>
  );
}

const InternshipListItem = () => (
  <S.InternshipContainer>
    <S.InternshipBg>
      <div />
    </S.InternshipBg>
    <S.DescriptionContainer>
      <S.InternshipTitleDiv>
        <S.InternshipTitle>Internship Title</S.InternshipTitle>
        <S.DateInfo>Posted 1 month ago</S.DateInfo>
      </S.InternshipTitleDiv>
      <S.SubHeading>Internship Poster | Location</S.SubHeading>
      <S.InternshipInfo>
        <S.Description>
          But I must explain to you how all this mistaken ideas of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth ......
        </S.Description>
        <S.ApplyBtn>
          <i className="fa fa-plus" /> Apply
        </S.ApplyBtn>
      </S.InternshipInfo>
    </S.DescriptionContainer>
  </S.InternshipContainer>
);

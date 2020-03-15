/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './style.scss';
import * as S from './index';

export default function InternshipList() {
  return (
    <ul style={{listStyleType: 'none', margin: '200px 30px'}}>
      <li className="internship-list-item">
        <div className="internship-description">
          <div className="internship-image" />
          <div className="description-inner">
            <S.InternshipTitle>Internship Title</S.InternshipTitle>
            <S.SubHeading>Internship Poster | Location </S.SubHeading>
            <S.Description>
              But I must explain to you how all this mistaken ideas of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth ......
            </S.Description>
          </div>
          <div className="internship-opportunity">
            <S.DateInfo>1 month ago</S.DateInfo>
            <S.ApplyBtn>
              <i className="fa fa-plus" /> Apply
            </S.ApplyBtn>
          </div>
        </div>
      </li>
    </ul>
  );
}
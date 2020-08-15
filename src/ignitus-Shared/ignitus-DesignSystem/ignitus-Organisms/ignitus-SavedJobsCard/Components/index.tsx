import React, { useState } from 'react';
import * as S from '../styles';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import { Props, Option, MenuProps } from '../types';
import { Button } from '../../../ignitus-Atoms/buttons';

export const SavedJobsCard = ({
  avatar,
  lastUpdated,
  location,
  poster,
  title,
  jobOptions,
  isDraft = false,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <S.SavedJobContainer>
      <S.ImageContainer>
        <img src={avatar} alt="avatar" />
      </S.ImageContainer>
      <S.DetailContainer>
        <S.JobTitle>{title}</S.JobTitle>
        <S.JobDesc>
          {poster} | {location}
        </S.JobDesc>
        <S.JobUpdate>Updated {lastUpdated}</S.JobUpdate>
      </S.DetailContainer>
      <S.RightItemsContainer style={{ right: isDraft ? '3%' : '8%' }}>
        <S.MoreContainer>
          <S.IconContainer onClick={() => setOpen(!open)}>
            <S.Icon name={AppIcon.MoreHorizontalIcon} />
          </S.IconContainer>
          <DropdownMenu setOpen={setOpen} open={open} jobOptions={jobOptions} />
        </S.MoreContainer>
        {isDraft ? (
          <Button size="large" category="secondary" style={{ marginLeft: 25 }}>
            Publish
          </Button>
        ) : null}
      </S.RightItemsContainer>
    </S.SavedJobContainer>
  );
};

export const DropdownMenu = ({ jobOptions, open, setOpen }: MenuProps) => {
  const handleEvent = ({ action, id, title }: Option) => {
    setOpen(false);
    action({ id, title });
  };

  return (
    <S.DropdownContainer style={{ display: open ? 'block' : 'none' }}>
      {jobOptions.map(({ action, title, id }, index) => {
        return (
          <S.DropdownItemContainer
            key={id}
            style={{
              borderWidth: index === jobOptions.length - 1 ? 0 : '0.25px',
              borderBottomLeftRadius:
                index === jobOptions.length - 1 ? '1rem' : 0,
              borderBottomRightRadius:
                index === jobOptions.length - 1 ? '1rem' : 0,
              borderTopLeftRadius: index === 0 ? '1rem' : 0,
            }}
            onClick={() => handleEvent({ action, id, title })}
          >
            <S.DropdownItemText className="title">{title}</S.DropdownItemText>
          </S.DropdownItemContainer>
        );
      })}
    </S.DropdownContainer>
  );
};

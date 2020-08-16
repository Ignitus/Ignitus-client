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
      <S.RightItemsContainer>
        <S.MoreContainer>
          <S.IconContainer onClick={() => setOpen(!open)}>
            <S.Icon name={AppIcon.MoreHorizontalIcon} />
          </S.IconContainer>
          <DropdownMenu setOpen={setOpen} open={open} jobOptions={jobOptions} />
        </S.MoreContainer>
        {isDraft ? (
          <Button size="large" category="secondary">
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
    <S.DropdownContainer open={open}>
      {jobOptions.map(({ action, title, id }, index) => {
        return (
          <S.DropdownItemContainer
            key={id}
            total={jobOptions.length}
            index={index}
            onClick={() => handleEvent({ action, id, title })}
          >
            <S.DropdownItemText className="title">{title}</S.DropdownItemText>
          </S.DropdownItemContainer>
        );
      })}
    </S.DropdownContainer>
  );
};

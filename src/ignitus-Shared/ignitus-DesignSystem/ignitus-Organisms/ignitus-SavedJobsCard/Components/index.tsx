import React, { useState, useEffect, useRef } from 'react';
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

  const ref: React.MutableRefObject<any> = useRef(null);
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <S.SavedJobContainer>
      <S.LeftItemsContainer>
        <S.Image src={avatar} alt="avatar" />
        <S.DetailContainer>
          <S.JobTitle>{title}</S.JobTitle>
          <S.JobDesc>
            {poster} | {location}
          </S.JobDesc>
          <S.JobUpdate>Updated {lastUpdated}</S.JobUpdate>
        </S.DetailContainer>
      </S.LeftItemsContainer>
      <S.RightItemsContainer>
        <S.MoreContainer ref={ref}>
          <S.IconContainer onClick={() => setOpen(!open)}>
            <S.Icon name={AppIcon.MoreHorizontalIcon} />
          </S.IconContainer>
          <DropdownMenu setOpen={setOpen} open={open} jobOptions={jobOptions} />
        </S.MoreContainer>
        {isDraft ? (
          <Button size="medium" category="secondary">
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

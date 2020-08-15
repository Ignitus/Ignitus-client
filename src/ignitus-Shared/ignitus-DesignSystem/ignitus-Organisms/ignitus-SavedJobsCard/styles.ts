import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import * as T from '../../ignitus-Atoms/typography';
import * as F from '../../ignitus-Atoms/fonts';
import { flexibleRowDiv, flexibleColDiv } from '../../shared';
import { Icon as I } from '../../../ignitus-Utilities/Components/icon';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.75rem;
`;

export const SavedJobContainer = styled(flexibleRowDiv)`
  border-radius: 1rem;
  box-shadow: 0 3px 6px 0 ${C.boxShadowColor};
  background-color: ${C.White};
  padding-left: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;
  margin-bottom: 1.25rem;
  flex-direction: row;
  justify-content: flex-start;
  display: flex;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  img {
    width: 4rem;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const DetailContainer = styled(flexibleColDiv)`
  height: 100%;
  margin-left: 0.7rem;
  align-items: flex-start;
`;

export const JobTitle = styled(T.Paragraph)`
  font-size: ${F.MD};
  font-family: ${F.PrimaryFamily};
  font-weight: ${F.Bold};
  color: ${C.SecondaryColor};
`;

export const JobDesc = styled(T.Paragraph)`
  font-size: ${F.XS};
  font-family: ${F.PrimaryFamily};
  font-wieght: ${F.Light};
  color: ${C.IgnitusBlue};
  margin-top: 2px;
  margin-bottom: 2px;
`;

export const JobUpdate = styled(T.Paragraph)`
  font-size: ${F.XS};
  font-family: ${F.PrimaryFamily};
  font-wieght: ${F.Light};
  color: ${C.GreySecondaryText};
`;

export const Icon = styled(I)``;

export const IconContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const DropdownContainer = styled(flexibleColDiv)`
  border-radius: 1rem 0 1rem 1rem;
  width: 10.3rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  background-color: ${C.White};
  margin-bottom: 100px;
  border: 0.25px solid ${C.Border};
  z-index: 1;
  position: absolute;
  top: 25px;
  right: 0;
`;

export const MoreContainer = styled.div`
  position: relative;
`;

export const RightItemsContainer = styled(flexibleRowDiv)`
  position: absolute;
`;

export const DropdownItemContainer = styled(flexibleRowDiv)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.25rem;
  border-bottom: 0.25px solid ${C.Border};
  &:hover {
    cursor: pointer;
    background-color: ${C.IgnitusBlue};
    .title {
      color: ${C.HoverTextColor};
    }
  }
`;

export const DropdownItemText = styled(T.Paragraph)`
  color: ${C.IgnitusBlue};
  font-family: ${F.PrimaryFamily};
  text-align: center
  font-weight: ${F.Normal};
  font-size: ${F.SM};
`;

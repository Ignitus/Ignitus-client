import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import * as T from '../../ignitus-Atoms/typography';
import * as F from '../../ignitus-Atoms/fonts';
import { flexibleRowDiv, flexibleColDiv } from '../../shared';
import { Icon as I } from '../../../ignitus-Utilities/Components/icon';
import { DropDownItemProp, DropdownContainerProp } from './types';

export const HeaderContainer = styled(flexibleRowDiv)`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.75rem;
`;

export const SavedJobContainer = styled(flexibleRowDiv)`
  border-radius: 1rem;
  box-shadow: 0 3px 6px 0 ${C.boxShadowColor};
  background-color: ${C.White};
  padding: 0.75rem 0 0.75rem 1.5rem;
  width: 100%;
  margin-bottom: 1.25rem;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 4rem;
  max-width: 100%;
  max-height: 100%;
`;

export const DetailContainer = styled(flexibleColDiv)`
  height: 100%;
  margin-left: 0.7rem;
  align-items: flex-start;
`;

export const JobTitle = styled(T.Paragraph)`
  font-size: ${F.MD};
  font-weight: ${F.Bold};
  color: ${C.SecondaryColor};
`;

export const JobDesc = styled(T.Paragraph)`
  font-size: ${F.XS};
  font-wieght: ${F.Light};
  color: ${C.IgnitusBlue};
  margin: 2px 0 4px 0;
`;

export const JobUpdate = styled(T.Paragraph)`
  font-size: ${F.XS};
  font-wieght: ${F.Light};
  color: ${C.GreySecondaryText};
`;

export const Icon = styled(I)`
  fill: ${C.IgnitusBlue};
`;

export const IconContainer = styled.div`
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const DropdownContainer = styled(flexibleColDiv)<DropdownContainerProp>`
  border-radius: 1rem 0 1rem 1rem;
  width: 10.3rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  background-color: ${C.White};
  margin-bottom: 100px;
  border: 0.25px solid ${C.Border};
  z-index: 1;
  position: absolute;
  top: 25px;
  right: 2rem;
  display: ${props => (props.open ? 'block' : 'none')};
`;

export const MoreContainer = styled.div`
  position: relative;
`;

export const LeftItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RightItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;
`;

export const DropdownItemContainer = styled(flexibleRowDiv)<DropDownItemProp>`
  border-width: ${props => (props.index === props.total - 1 ? '0' : '1')};
  border-bottom-left-radius: ${props =>
    props.index === props.total - 1 ? '1rem' : '0'};
  border-bottom-right-radius: ${props =>
    props.index === props.total - 1 ? '1rem' : '0'};
  border-top-left-radius: ${props => (props.index === 0 ? '1rem' : 0)};
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
  text-align: center
  font-weight: ${F.Normal};
  font-size: ${F.SM};
`;

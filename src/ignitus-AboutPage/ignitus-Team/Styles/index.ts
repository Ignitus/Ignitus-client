import styled from '@emotion/styled';

import {Paragraph, Loading, Normal} from '../../../ignitus-Shared';
import {default as I} from '../../../ignitus-Shared/ignitus-Utilities/Components/icon';

import * as T from '../../../ignitus-Shared/ignitus-DesignSystem/shared';
import * as C from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

export const Container = styled(T.Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  margin: 3rem 0;
`;

export const TitleWrapper = styled(T.flexibleColDiv)``;
export const Section = styled(T.flexibleColDiv)``;
export const Title = styled(T.Title)``;
export const ContributorsWrapper = styled.div`
  max-width: 80rem;
  margin-top: 2rem;
  width: 100%;
`;
export const Contributors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const StyledParagraph = styled(Paragraph)`
  text-align: center;
`;

export const AvatarLink = styled(T.Link)`
  width: 7.5rem;
  background: none;
  margin: 10px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    width: calc(8rem - 10px);
    height: calc(8rem - 10px);
    border: 2px solid ${C.White};
    border-radius: 50%;
    box-sizing: unset;
  }
  &:hover {
    img {
      border-radius: 50%;
      border: 4px solid ${C.White};
      box-shadow: 0 0 20px ${C.IgnitusBlue};
      opacity: 1;
    }
  }
`;
export const Avatar = styled(T.Avatar)`
  border-radius: 50%;
  border: 4px solid ${C.IgnitusBlue};
  box-shadow: 0 0 0 ${C.IgnitusBlue};
  transition: border 0.5s, box-shadow 0.5s;
  opacity: 0.9;
`;

export const Loader = styled(Loading)`
  margin: 3em;
  img {
    width: 6rem;
  }
`;

export const Link = styled(T.Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
  font-weight: ${Normal};
  color: ${C.IgnitusBlue};
`;
export const Icon = styled(I)`
  height: 1.2rem;
  fill: ${C.IgnitusBlue};
`;

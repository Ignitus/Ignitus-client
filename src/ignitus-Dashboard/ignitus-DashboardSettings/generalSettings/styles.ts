import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Container } from '../../../ignitus-Shared/ignitus-DesignSystem/shared';

import {
  DefaultInput,
  Paragraph,
  RoundedButton,
} from '../../../ignitus-Shared';
import {
  White,
  Orange,
  IgnitusBlue,
} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { LG } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';

export const ParentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2rem;
`;

export const RightContainer = styled(Container)`
  background: ${White};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  margin: 2rem 0;
  padding: 1rem;
`;

export const TopSection = styled.div`
  padding: 2rem;
`;

export const MiddleSection = styled.div`
  padding: 2rem;
`;
export const ElementContainer = styled(Container)`
  /* margin: 1rem 0; */
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const BottomSection = styled.div`
  text-align: left;
  margin-top: -3rem;
  padding: 2rem;
`;

export const Text = styled(Paragraph)`
  font-size: ${LG};
  margin-right: 0.5rem;
  min-width: 8rem;
`;

export const Input = styled(DefaultInput)`
  width: 16rem;
  padding: 0.6rem;
`;

export const InputSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem 0;
`;

export const ImageSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 0.9rem;
  margin-right: 1rem;
`;

export const StyledParagraph = styled(Paragraph)`
  font-weight: bold;
  width: 46rem;
`;

export const StyledRoundedButton = styled(RoundedButton)`
  display: flex;
  font-weight: bold;
  color: ${props => props.color};
  height: 3rem;
  margin: 0;
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ParagraphLink = styled(Link)`
  font-size: 0.8rem;
  color: ${Orange};
  &:hover {
    color: ${IgnitusBlue};
  }
`;

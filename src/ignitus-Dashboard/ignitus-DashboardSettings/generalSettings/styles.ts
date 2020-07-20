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
  width: 80%;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 6rem 2rem 0 5rem;
`;

export const RightContainer = styled(Container)`
  margin: 6rem auto;
  background: ${White};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  max-width: 30rem;
  padding-left: 2rem;
`;

export const TopSection = styled.div`
  padding: 1rem;
`;

export const MiddleSection = styled.div`
  padding: 2rem;
`;
export const ElementContainer = styled(Container)`
  margin: 1.5rem 0;
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
  margin: 0.5rem 1rem 0 0;
  min-width: 7rem;
`;

export const Input = styled(DefaultInput)`
  width: 20rem;
`;

export const InputSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
`;

export const ImageSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
`;

export const Image = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 0.9rem;
`;

export const StyledParagraph = styled(Paragraph)`
  font-weight: bold;
`;

export const StyledRoundedButton = styled(RoundedButton)`
  display: flex;
  font-weight: bold;
  color: ${props => props.color};
  margin-left: 1rem;
  height: 3rem;
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ParagraphLink = styled(Link)`
  position: relative;
  left: 40%;
  font-size: 0.8rem;
  color: ${Orange};
  &:hover {
    color: ${IgnitusBlue};
  }
`;

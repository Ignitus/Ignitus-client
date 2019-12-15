/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import * as C from '../../ignitus-Helpers/emotion-Styles/colors';
import * as F from '../../ignitus-Helpers/emotion-Styles/font';


export const Wrapper = styled.div`
  margin: 1em;
`;

export const Icon = styled.span`
  i { color: ${C.IgnitusBlue};}
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 24px;
`;

export const Title = styled.h3`
  font-weight: ${F.Normal};;
  color: ${C.IgnitusBlue};
`;

export const Paragraph = styled.p`
  font-size: ${F.SM};
  font-weight: ${F.Light};
`;

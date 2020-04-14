/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import * as C from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as F from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import {minimumWidthQuery} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';
import {Paragraph as P} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const Icon = styled.span`
  i {
    color: ${C.IgnitusBlue};
  }
`;

export const Paragraph = styled(P)`
  font-weight: ${F.SemiNormal};
  text-align: center;
`;

export const Card = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  margin: 0.5em;
  padding: 1rem;
  display: flex;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  flex-direction: column;
  background: ${C.White};

  ${minimumWidthQuery[1]} {
    flex: 0 0 80%;
    max-width: 80%;
  }
  ${minimumWidthQuery[2]} {
    flex: 0 0 60%;
    max-width: 60%;
  }
  ${minimumWidthQuery[3]} {
    flex: 0 0 40%;
    max-width: 40%;
  }
  ${minimumWidthQuery[4]} {
    flex: 0 0 27%;
    max-width: 27%;
  }
`;

export const CardPicture = styled.img`
  max-width: 100%;
  height: 75%;
  object-fit: contain;
  padding: 0.3em;
  margin-bottom: 2em;
`;

export const CardText = styled.p`
  font-size: ${F.SM};
`;

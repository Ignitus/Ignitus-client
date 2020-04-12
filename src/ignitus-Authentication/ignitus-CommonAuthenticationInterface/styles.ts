import styled from '@emotion/styled';
import {
  IgnitusBlue,
  White,
  SecondaryColor,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import {minimumWidthQuery} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';
import {
  flexibleColDiv,
  flexibleRowDiv,
} from '../../ignitus-Shared/ignitus-DesignSystem/shared';
import {
  Heading2,
  Paragraph as P,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {Link} from 'react-router-dom';
import {Bold} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';

export const Container = styled.div`
  padding: 4rem;
  margin-top: 4rem;
  background: ${IgnitusBlue};
`;

export const Section = styled(flexibleColDiv)`
  margin: 0 auto;
  ${minimumWidthQuery[1]} {
    flex: 0 0 100%;
    max-width: 100%;
  }
  ${minimumWidthQuery[2]} {
    flex: 0 0 50%;
    max-width: 50%;
  }
  ${minimumWidthQuery[3]} {
    flex: 0 0 50%;
    max-width: 50%;
  }
  ${minimumWidthQuery[4]} {
    flex: 0 0 60%;
    max-width: 60%;
  }
  ${minimumWidthQuery[5]} {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const Title = styled(Heading2)`
  color: ${White};
`;

export const SubTitle = styled(P)`
  color: ${White};
`;

export const TopSection = styled.div`
  text-align: center;
`;

export const BottomSection = styled(flexibleRowDiv)`
  margin: 4rem 0;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${SecondaryColor};
  padding: 1.5rem;
  border-radius: 2rem;
  margin: 1rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 500ms;
  }
`;

export const Paragraph = styled(P)`
  color: ${IgnitusBlue};
  font-weight: ${Bold};
`;

export const Image = styled.img`
  width: 16rem;
  height: 16rem;
`;
export const LeftRow = styled(StyledLink)``;
export const RightRow = styled(StyledLink)``;

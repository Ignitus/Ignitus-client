import styled from '@emotion/styled';
import {
  IgnitusBlue,
  White,
  SecondaryColor,
  minimumWidthQuery,
  Heading2,
  Paragraph as P,
  Medium,
} from '../../ignitus-Shared';
import {
  flexibleColDiv,
  flexibleRowDiv,
} from '../../ignitus-Shared/ignitus-DesignSystem/shared';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  padding: 4rem;
  margin-top: 2rem;
  background: ${IgnitusBlue};
`;

export const Section = styled(flexibleColDiv)`
  margin: 0 auto;
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
  ${minimumWidthQuery[1]} {
    flex-direction: column;
  }
  ${minimumWidthQuery[2]} {
    flex-direction: column;
  }
  ${minimumWidthQuery[3]} {
    flex-direction: row;
  }
  ${minimumWidthQuery[4]} {
    flex-direction: row;
  }
  ${minimumWidthQuery[5]} {
    flex-direction: row;
  }
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
  font-weight: ${Medium};
`;

export const Image = styled.img`
  width: 16rem;
  height: 16rem;

  ${minimumWidthQuery[1]} {
    width: 10rem;
    height: 10rem;
  }
  ${minimumWidthQuery[2]} {
    width: 14rem;
    height: 14rem;
  }
  ${minimumWidthQuery[5]} {
    width: 16rem;
    height: 16rem;
  }
`;
export const LeftRow = styled(StyledLink)``;
export const RightRow = styled(StyledLink)``;

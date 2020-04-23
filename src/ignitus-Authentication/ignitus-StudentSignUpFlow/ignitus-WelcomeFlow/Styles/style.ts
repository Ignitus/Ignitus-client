import styled from '@emotion/styled';
import { minimumWidthQuery } from '../../../../ignitus-Shared';
import { flexibleColDiv } from '../../../../ignitus-Shared/ignitus-DesignSystem/shared';

export const WelcomeContainer = styled(flexibleColDiv)`
  background: white;
  margin-top: 4rem;
  padding: 2rem;
`;

export const Progress = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const TopSection = styled(flexibleColDiv)`
`;

export const DefaultDropdownContainer = styled.div`
  margin: 1rem;
`;

export const MiddleSection = styled.div`
  align-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem;
  flex-wrap: wrap;
`;

export const BottomSection = styled(flexibleColDiv)`
  margin-top: 2rem;
`;

export const LeftSection = styled(flexibleColDiv)`
  ${minimumWidthQuery[2]} {
    margin-right: none;
  }
  ${minimumWidthQuery[3]} {
    margin-right: none;
  }
  ${minimumWidthQuery[4]} {
    margin-right: 1rem;
  }
  ${minimumWidthQuery[5]} {
    margin-right: 1rem;
  }
`;
export const RightSection = styled.div`
  ${minimumWidthQuery[2]} {
    margin-left: none;
  }
  ${minimumWidthQuery[3]} {
    margin-left: none;
  }
  ${minimumWidthQuery[4]} {
    margin-left: 1rem;
  }
  ${minimumWidthQuery[5]} {
    margin-left: 1rem;
  }
`;

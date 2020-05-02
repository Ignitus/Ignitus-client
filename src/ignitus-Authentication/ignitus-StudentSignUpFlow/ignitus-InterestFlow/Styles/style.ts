import styled from '@emotion/styled';
import { minimumWidthQuery } from '../../../../ignitus-Shared';

export const InterestImage = styled.img``;

export const CheckboxContainer = styled.div`
  margin: 1rem;
`;

export const LeftSection = styled.div`
  ${minimumWidthQuery[2]} {
    margin-right: none;
  }
  ${minimumWidthQuery[3]} {
    margin-right: 3rem;
  }
  ${minimumWidthQuery[4]} {
    margin-right: 3rem;
  }
  ${minimumWidthQuery[5]} {
    margin-right: 3rem;
  }
`;

export const RightSection = styled.div`
  ${minimumWidthQuery[2]} {
    margin-left: none;
  }
  ${minimumWidthQuery[3]} {
    margin-left: 4rem;
  }
  ${minimumWidthQuery[4]} {
    margin-left: 4rem;
  }
  ${minimumWidthQuery[5]} {
    margin-left: 4rem;
  }
`;

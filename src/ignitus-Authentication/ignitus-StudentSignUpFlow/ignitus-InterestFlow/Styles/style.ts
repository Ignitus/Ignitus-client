import styled from '@emotion/styled';
import { minimumWidthQuery } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';

export const InterestImage = styled.img``;

export const CheckboxContainer = styled.div`
  margin: 1rem;
`;

export const LeftSection = styled.div`
  ${minimumWidthQuery[0]} {
    margin-right: none;
  }
  ${minimumWidthQuery[1]} {
    margin-right: 3rem;
  }
  ${minimumWidthQuery[2]} {
    margin-right: 3rem;
  }
  ${minimumWidthQuery[3]} {
    margin-right: 3rem;
  }
`;

export const RightSection = styled.div`
  ${minimumWidthQuery[0]} {
    margin-left: none;
  }
  ${minimumWidthQuery[1]} {
    margin-left: 4rem;
  }
  ${minimumWidthQuery[2]} {
    margin-left: 4rem;
  }
  ${minimumWidthQuery[3]} {
    margin-left: 4rem;
  }
`;

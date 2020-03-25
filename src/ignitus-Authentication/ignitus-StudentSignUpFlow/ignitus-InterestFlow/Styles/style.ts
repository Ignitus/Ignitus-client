import styled from '@emotion/styled';
import { mq } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';

export const InterestImage = styled.img``;

export const CheckboxContainer = styled.div`
  margin: 1rem;
`;

export const LeftSection = styled.div`
  ${mq[0]} {
    margin-right: none;
  }
  ${mq[1]} {
    margin-right: 3rem;
  }
  ${mq[2]} {
    margin-right: 3rem;
  }
  ${mq[3]} {
    margin-right: 3rem;
  }
`;

export const RightSection = styled.div`
  ${mq[0]} {
    margin-left: none;
  }
  ${mq[1]} {
    margin-left: 4rem;
  }
  ${mq[2]} {
    margin-left: 4rem;
  }
  ${mq[3]} {
    margin-left: 4rem;
  }
`;

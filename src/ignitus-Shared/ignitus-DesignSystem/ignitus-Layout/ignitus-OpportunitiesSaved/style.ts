import styled from '@emotion/styled';
import { flexibleColDiv } from '../../shared';

export const OpportunitiesSavedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 4fr);
  grid-auto-rows: auto;
  grid-row-gap: 2rem;
`;

export const OpportunityList = styled(flexibleColDiv)`
  padding: 2rem;
`;
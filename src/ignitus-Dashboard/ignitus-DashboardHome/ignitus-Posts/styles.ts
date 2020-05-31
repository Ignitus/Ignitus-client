import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6rem 3rem;
  justify-content: center;
  algin-items: center;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  left: 2rem;
`;

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightSection = styled.div`
  position: fixed;
  right: 2rem;
`;

export const Wrapper = styled.div`
  margin: 1rem;
`;

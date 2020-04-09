import styled from '@emotion/styled';

export const Container = styled.div`
  background: url('https://storage.googleapis.com/ignitus_assets/ig-assets/splitBlueBackground.png')
    no-repeat;
  background-size: 70%;
  background-position: top right;
  height: 67.5rem;
  position: relative;
  z-index: 0;

  @media (max-width: 945px) {
    & {
      height: 75rem;
    }
  }

  @media (max-width: 751px) {
    & {
      height: 100%;
    }
  }

  @media (max-width: 568px) {
    & {
      margin-bottom: 0;
    }
  }
`;

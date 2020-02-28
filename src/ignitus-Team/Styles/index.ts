import styled from '@emotion/styled';
import * as C from '../../ignitus-Helpers/emotion-Styles/colors';
import * as T from '../../ignitus-Helpers/emotion-Styles/shared';

export const GithubContributorsContainer = styled(T.Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  margin: 3rem 0;
`;

export const TitleWrapper = styled(T.flexibleColDiv)``;
export const Section = styled(T.flexibleColDiv)``;

export const GithubContributors = styled.div`
  max-width: 80rem;
  width: 100%;

  .Contributors {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .Contributors .Contributor {
    width: 8rem;
    height: 10rem;
    background: none;
    margin: 10px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 3px;
      top: 3px;
      width: calc(8rem - 10px);
      height: calc(8rem - 10px);
      border: 2px solid #fff;
      border-radius: 50%;
      box-sizing: unset;
    }

    &:hover {
      img {
        border-radius: 50%;
        border: 4px solid #fff;
        box-shadow: 0 0 20px #000066;
        opacity: 1;
      }
    }

    img {
      border-radius: 50%;
      border: 4px solid #000066;
      box-shadow: 0 0 0 #000066;
      transition: border 0.5s, box-shadow 0.5s;
      opacity: 0.9;
    }
  }
`;

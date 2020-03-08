import styled from '@emotion/styled';
import * as T from '../../ignitus-Helpers/emotion-Styles/shared';
import * as C from '../../ignitus-Helpers/emotion-Styles/colors';

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

export const GithubContributorsTitle = styled(T.Title)`
  i {
  font-size: 1.2rem;
  margin-right: 3px;
}
`;

export const GithubContributors = styled.div`
  max-width: 80rem;
  width: 100%;
`;

export const Contributors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Paragraph = styled(T.Paragraph)`
      text-align: center;Ì
`;

export const Link = styled(T.Link)`
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
`;

export const Avatar = styled(T.Avatar)`
  border-radius: 50%;
  border: 4px solid #000066;
  box-shadow: 0 0 0 #000066;
  transition: border 0.5s, box-shadow 0.5s;
  opacity: 0.9;
`;

export const Loader = styled(T.flexibleColDiv)`
  margin: 3em;
`;

export const GithubContributorsLink = styled(T.Link)`
  display: block;
  padding: 0.5rem 3rem;
  font-weight: 300;
  text-align: right;
  color: ${C.IgnitusBlue};
`;

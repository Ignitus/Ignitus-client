import styled from '@emotion/styled';
import {Container, flexibleColDiv, flexibleRowDiv} from '../../ignitus-Shared/ignitus-DesignSystem/shared';
import Icon from '../../ignitus-Shared/ignitus-Utilities/Components/icon';
import * as C from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { minimumWidthQuery } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';
import * as F from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import {Avatar} from '../../ignitus-AboutPage/ignitus-Team/Styles';



export const Container1 = styled(Container)`
  margin: 10rem auto;
  max-width: ${minimumWidthQuery[3]};
  height: auto;
  background: ${C.White};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  padding-left: 5rem;
  padding-right: 0;
  padding-bottom: 5rem;
`;

export const Container2 = styled.div`
  float: right;
`;

export const Container3 = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction:column;
  justify-items: space-around;

`;

export const ElementContainer = styled(Container)`
  max-width: ${minimumWidthQuery[3]};
  flex:1;

`;

export const HeadingContainer = styled(flexibleRowDiv)`
`;

export const NameContainer = styled.div`
  padding: 1rem;
  flex: 10;
`;

export const StyledIcon = styled(Icon)`
  height: 2rem;
  width: 2rem;
  fill: ${C.IgnitusBlue};
  transition: 0.3s;
  flex: 1;
`;

export const ContentContainer = styled(Container)`
  width: 90%;
  float: right;
`;

export const AboutContent = styled.textarea`
  font-size: ${F.SM};
  outline: none;
  border:none;
  width: 100%;
  overflow: hidden;

`;

export const Education1 = styled.input`
  font-size: ${F.SM};
  font-weight: ${F.SemiBold};
  outline:none;
  border:none;
  width: 15rem;
`;

export const Education2 = styled.input`
  font-size: ${F.SM};
  outline:none;
  border:none;
  width: 15rem;
`;

export const Education3 = styled.input`
    font-size: ${F.SM};
    outline:none;
    border:none;
    width: 15rem;
`;

export const Publications = styled(flexibleRowDiv)`
  align-items: flex-start;
`;

export const PublicationsInput = styled.textarea`
  font-size: ${F.XS};
  outline:none;
  border:none;
  width: 100%;
  flex:20;
  overflow:hidden;
`;

export const PublicationsStyledIcon = styled(Icon)`
  height: 1.3rem;
  width: 1.3rem;
  fill: ${C.IgnitusBlue};
  transition: 0.3s;
  flex: 1;
`;

export const ContributionsContent = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ContributionsElement = styled(flexibleRowDiv)`
  flex:1;
`;

export const ContributionsStyledIcon = styled(Icon)`
  height: 1.3rem;
  width: 1.3rem;
  fill: ${C.IgnitusBlue};
  transition: 0.3s;
`;

export const ContributionsInput = styled.input`
  outline: none;
  border:none;
  width:2rem;
`;

export const RecommendationsContent1 = styled(flexibleRowDiv)`
  flex-wrap:wrap;
  align-items: flex-start;
`;

export const RecommendationsAvatar = styled(Avatar)`
  border-radius: 50%;
  border:none;
  margin:2rem;
`;
export const RecommendationsContent2 = styled(flexibleColDiv)`
  flex:1;
`;
export const RecommendationsInput1 = styled.input`
  outline: none;
  border:none;
  color: ${C.IgnitusBlue};
  font-size: ${F.XL};
  font-weight: ${F.Bold};
  background-color: ${C.White};
  &:: placeholder{
    color: ${C.IgnitusBlue};
    font-weight: ${F.Bold};
    background: transparent;
    font-size: ${F.XL};
  }
  flex:1;
`;
export const RecommendationsInput2 = styled.input`
  outline: none;
  border:none;
  color: ${C.IgnitusBlue};
  font-size: ${F.SM};
  font-weight: ${F.Normal};
  background-color: ${C.White};
  &:: placeholder{
    color: ${C.IgnitusBlue};
    font-weight: ${F.Normal};
    background: transparent;
    font-size: ${F.MD};
  }
  flex:1;
`;
export const RecommendationsInput3 = styled.input`
  outline: none;
  border:none;
  color: ${C.GreyOne};
  font-size: ${F.LG};
  font-weight: ${F.Normal};
  background-color: ${C.White};
  &:: placeholder{
    color: ${C.GreyOne};
    font-weight: ${F.Normal};
    background: transparent;
    font-size: ${F.MD};
  }
  flex:2;
`;

export const RecommendationsMainInput = styled.textarea`
  width: 100%;
  overflow:hidden;
  border: none;
  outline: none;
  color: ${C.GreyOne};
  font-size: ${F.XS};
  font-weight: ${F.Normal};
  background-color: ${C.White};
  &:: placeholder{
    color: ${C.GreyOne};
    font-weight: ${F.Normal};
    background: transparent;
    font-size: ${F.XS};
  }
  flex:2;
`;

export const ButtonDiv = styled.div`
  text-align: center;
  margin: 1rem;
`;

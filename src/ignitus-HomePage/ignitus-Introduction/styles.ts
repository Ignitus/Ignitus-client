import styled from '@emotion/styled';
import * as C from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import {
  XL,
  LG,
  Normal,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import {minimumWidthQuery} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';
import {Button as B} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';

const ContainerBackground: string =
  'https://storage.googleapis.com/ignitus_assets/ig-assets/splitBlueBackground.png';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${ContainerBackground}) no-repeat;
  background-size: 54%;
  background-position: top right;
  padding: 9rem 6rem;

  ${minimumWidthQuery[0]} {
    flex-direction: column;
    background: none;
  }
  ${minimumWidthQuery[1]} {
    flex-direction: column;
    background: none;
  }
  ${minimumWidthQuery[2]} {
    flex-direction: row;
    background: url(${ContainerBackground}) no-repeat;
    background-size: 54%;
    background-position: top right;
  }
`;

export const TitleImage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  color: ${C.IgnitusBlue};
  font-size: 56px;
  font-weight: 500;
  letter-spacing: 2px;
  margin: 1rem 0;
`;

export const PrimaryText = styled.p`
  color: ${C.Black};
  font-size: ${XL};
  font-weight: ${Normal};
  margin: 1rem 0;
`;

export const SecondaryText = styled.p`
  color: ${C.Black};
  font-size: ${LG};
  font-weight: ${Normal};
  margin: 1rem 0;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

export const RightSection = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
`;

export const Torch = styled.img`
  height: 6rem;
  margin-left: 2rem;
`;

export const Button = styled(B)`
  border-radius: 2rem;
  width: 10rem;
`;

export const Resume = styled.img`
  ${minimumWidthQuery[0]} {
    width: 14rem;
  }
  ${minimumWidthQuery[1]} {
    width: 16rem;
  }
  ${minimumWidthQuery[2]} {
    width: 18rem;
  }
`;

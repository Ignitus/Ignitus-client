import styled from '@emotion/styled';
import { Icon as I } from '../../../ignitus-Shared/ignitus-Utilities/Components/icon';
import { Paragraph } from '../../../ignitus-Shared/ignitus-DesignSystem/shared';
import { Input } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultInput/styles';
import { DefaultInput, IgnitusBlue, XL } from '../../../ignitus-Shared';
import { DefaultButtonWithIcon } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultButtonWithIcon/Components/index';

export const Icon = styled(I)`
  width: 1.5rem;
  fill: ${IgnitusBlue};
`;

export const BottomSection = styled.div`
  display: flex;
  padding: 4rem;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const SubTitle = styled(Paragraph)`
  margin-top: 1rem;
  font-size: ${XL};
`;

export const ImageContainer = styled.div`
  img {
    height: 10rem;
    width: 10rem;
    border-radius: 0.9rem;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 2rem;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  padding: 2rem;
`;

export const Row = styled.div`
  display: flex;
`;

export const Text = styled(Input)`
  margin: 0.2rem;
`;

export const StyledDefaultInput = styled(DefaultInput)`
  padding: 0.5rem;
  padding-left: 1rem;
  margin: 0 0.5rem 0.5rem;
`;

export const StyledDefaultButtonWithIcon = styled(DefaultButtonWithIcon)`
  width: 12rem;
`;

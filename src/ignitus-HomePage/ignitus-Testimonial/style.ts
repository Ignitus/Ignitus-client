import styled from '@emotion/styled';
import {maximumWidthQuery} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';
import {Heading3} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {IgnitusBlue} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import {flexibleColDiv} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import {MD} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';

export const Container = styled.div`
  ${maximumWidthQuery[0]} {
    display: none;
  }
`;

export const Title = styled(Heading3)`
  color: ${IgnitusBlue};
  text-align: center;
`;

export const Testimonial = styled(flexibleColDiv)``;
export const Carousel = styled(flexibleColDiv)`
  padding: 1em;
  text-align: center;
`;

export const Text = styled.div`
  &::before {
    color: ${IgnitusBlue};
    content: '\f10d';
    display: inline-block;
    font-family: 'FontAwesome';
    vertical-align: top;
  }
  ::after {
    color: ${IgnitusBlue};
    content: '\f10e';
    display: inline-block;
    font-family: 'FontAwesome';
    vertical-align: bottom;
  }

  p {
    display: inline-block;
    font-size: ${MD};
    font-style: italic;
    font-weight: 500;
    margin: 0 0.6rem;
    text-align: center;
  }
`;

export const Avatar = styled(flexibleColDiv)`
  margin: 1rem 0;
  img {
    border-radius: 100%;
    height: 15.5vh;
  }
`;

import styled from '@emotion/styled';
import * as C from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

export const SeparatorContainer = styled.div`
    padding: 2rem;
    width: 30%;
`;

export const Separator = styled.hr`
    margin-top: 2em;
    margin-bottom:2em;

        line-height: 0em;
        position: relative;
        outline: 0;
        border: 0;
        color: black;
        text-align: center;
        font-weight:700;
        font-size: large;
        height: 2.3em;
        opacity: .5;
        &:before {
          content: '';
          background: ${C.Grey2};
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 2px;
        }
        &:after {
          content: attr(data-content);
          position: relative;
          display: inline-block;
          color: black;
          border-radius: 100% ;
          padding: 0.5em;
          line-height: 1.5em;
          color: ${C.GreySecondaryText};
          background-color: ${C.Grey2};
        }


`;
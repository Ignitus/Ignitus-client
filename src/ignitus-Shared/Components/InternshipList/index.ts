import styled from '@emotion/styled';
import * as T from '../../ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as C from '../../ignitus-DesignSystem/ignitus-Atoms/colors';

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

export const ListContainer = styled.ul`
  list-style-type: none;
  margin: 200px 30px;
  li:first-child {
    border-top-left-radius: 1.5em;
  }
  li:last-child {
    border-bottom-right-radius: 1.5em;
  }
`;

export const InternshipContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 10px 20px;
  margin: 3px;
  align-items: center;
  justify-content: center;
`;

export const InternshipBg = styled.div`
  flex-basis: 15%;
  max-width: 15%;
  padding: 0 25px;
  div {
    background-color: grey;
    width: 100%;
    height: 120px;
  }
  ${mq[2]} {
    flex-basis: 20%;
    max-width: 20%;
  }
  ${mq[1]} {
    flex-basis: 30%;
    max-width: 30%;
  }
  ${mq[0]} {
    flex-basis: 50%;
    max-width: 50%;
    margin: 10px 0;
  }
`;

export const DescriptionContainer = styled.div`
  flex-basis: 85%;
  display: flex;
  flex-direction: column;
  ${mq[2]} {
    flex-basis: 80%;
    max-width: 80%;
  }
  ${mq[1]} {
    flex-basis: 70%;
    max-width: 70%;
  }
  ${mq[0]} {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

export const InternshipTitleDiv = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: row;
`;

export const InternshipTitle = styled(T.Heading1)`
  flex-basis: 50%;
  color: ${C.SecondaryColor};
`;

export const DateInfo = styled(T.Paragraph)`
  color: grey;
  flex-basis: 50%;
  text-align: end;
`;

export const SubHeading = styled(T.Heading4)`
  flex-basis: 100%;
  color: ${C.IgnitusBlue};
`;

export const InternshipInfo = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Description = styled(T.Paragraph)`
  flex-basis: 85%;
  color: grey;
`;

export const ApplyBtn = styled(T.Paragraph)`
  font-size: 1.1em;
  cursor: pointer;
  color: ${C.IgnitusBlue};
  flex-basis: 15%;
  text-align: center;
`;

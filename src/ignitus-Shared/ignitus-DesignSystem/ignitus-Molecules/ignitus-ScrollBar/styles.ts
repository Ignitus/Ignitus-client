import styled from '@emotion/styled';

export const Scroll = styled.div`
  margin: 30px;
  float: left;
  height: 300px;
  width: 65px;
  background: #f5f5f5;
  overflow-y: scroll;
  margin-bottom: 25px;

  ::-webkit-scrollbar {
    width: 12px;
    background: #f5f5f5;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #f90;
  }
`;

export const Overflow = styled.div`
  min-height: 450px;
`;

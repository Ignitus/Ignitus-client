import styled from '@emotion/styled';
import * as C from '../colors';
import * as F from '../fonts';

export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 2rem;
  max-height: 20rem;
`;

export const SearchBarWrapper = styled.div`
  width: 20rem;
  height: 3rem;
`;

export const SearchBar = styled.input`
  outline: none;
  border: 0.1rem solid ${C.IgnitusBlue};
  border-radius: 0.5rem;
  width: 20rem;
  height: 2.5rem;
  padding-left:0.25rem;
  color: ${C.IgnitusBlue};
  font-weight: ${F.SemiBold};
  :: placeholder{
    color: ${C.IgnitusBlue};
    font-weight: ${F.SemiBold};
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0.25rem;
  background-color: ${C.White};
  overflow:auto;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: baseline;
  padding: 0.5rem;
  height: 3rem;
  :hover{
    background-color: ${C.GreyLight};
  }
  flex:1;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width : 2.5rem;
  margin: 0 1rem 0 1rem;
`;

export const NameWrapper = styled.div`
  margin: 0.5rem;

`;

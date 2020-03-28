import styled from '@emotion/styled';
import * as C from '../colors';
import * as F from '../fonts';
import icon from '../../../ignitus-Utilities/Components/icon';

export const InputCont = styled.div`
height: 50px;
width: 500px;  
border-radius: 20px ;
border: 2px solid ${C.IgnitusBlue};
color: ${C.IgnitusBlue};
background-color: ${C.White} ;
input[type="text"]:focus{
  border-color: none;
  // box-shadow: 0 0 8px 0 ;
} 
`;

export const Input = styled.input`
  height: 45px;
  width: 430px;  
  border-radius: 20px ;
  color: ${C.IgnitusBlue};
  font-weight: ${F.Light};
  font-size: ${F.XL};
  border:none;
  background-color: none;
  ::placeholder {
    algin:center;
    padding: 20px;
    height: 50px;
    max-width: 300px;  
    background-color: none;
    color: ${C.IgnitusBlue};
    font-weight: ${F.Light};
    font-size: ${F.XL};
    }
    input : focus{
      outline: none;
      box-shadow: none;
    }
  `;

  export const StyledIcon = styled(icon)`
  margin-left: 20px;
 
  height: 2rem;
  color: ${C.IgnitusBlue};
`;
  

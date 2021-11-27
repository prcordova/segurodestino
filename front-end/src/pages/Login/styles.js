import styled from 'styled-components';
import { colors } from '../../assets/colors';


export const MainLoginContainer = styled.div`
  
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;   
    width: 100%;
    height: 100vh;
    background-color: #7A4EF8;

    font-family: monospace;  
  
  `;
export const LoginContainer = styled.div`
   
  
  height: 450px;
  width: 350px;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   border-radius: 10px;
   background-color: #8C8FE6;
   border: solid 1px #bfbfbf;
   
  
  
  
`;
export const HeaderLoginForm = styled.div`
  width: 100%; 
  height: 25%;
  display: flex;
  justify-content: center;
    align-items: center;
    flex-direction: column;
    
    

`;
export const FormContainer = styled.div`
  width: 100%; 
  height: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 50%;
  align-items: center;

`;

export const FooterLoginForm = styled.div`
   
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;
  
  button{  
    height: 50px   
    height: 40px;
    margin: 10px 0 0 0;
     
    
    
  }

`;
export const InputFormLogin = styled.div`
  
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin: 5px;
  input{
    width: 100%;
    margin: 3px 0 3px 0;
    border-radius: 5px;
    color: #0b0b0b;
    background-color: #7A4EF8;

  }
`;
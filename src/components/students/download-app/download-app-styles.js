import styled from 'styled-components';

export const Text = styled.div`
  text-align: center;
  margin: 30px;
  @media only screen and (max-width: 768px) {
    text-align: left;
    margin: 0 0 30px 0;
    padding: 0 20px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 350px;
  height: 40px;
  border: 1px solid white;
  border-radius: 15px;
  transition: all .3s linear;
  outline: 0;
  ${({ isActive }) => isActive && `
    border-color: #F95F05;
    box-shadow: 0 0 10px #F95F05;
  `};
  @media only screen and (max-width: 768px) {
    width: 300px;
  }    
`;

export const StyledInput = styled.input`
  position: absolute;
  background: transparent;
  width: 301px;
  height: 38px;
  padding-left: 47px;
  border: none;
  border-radius: 14px;  
  outline: 0;
  color: white;
  font-size: 14px;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: "color 99999s ease-out, background-color 99999s ease-out";
    -webkit-transition: "color 99999s ease-out, background-color 99999s ease-out";
    transition-delay: 99999s;
    -webkit-transition-delay: 99999s;
  } 
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #aaa;
  }
  :-ms-input-placeholder {
    color: #aaa;
  }
  @media only screen and (max-width: 768px) {
    width: 251px;
  }   
`;

export const IconContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 40px;
`;

export const EmailIcon = styled.img`
  width: 20px;
  height: 14px;
`;

export const WhatsAppIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const InputSeparator = styled.div`
  height: 25px;
`;

export const InputError = styled.div`
  padding: 8px 0 0 5px;
  color: #F80305;
  font-size: 14px;
`;

export const DownloadContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    gap: 15px;
  }  
`;

export const Download = styled.img`
  height: 60px;
  @media only screen and (max-width: 768px) {
    height: 50px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: space-between;
  margin-bottom: 50px;
`;
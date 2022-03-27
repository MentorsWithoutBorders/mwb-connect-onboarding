import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const Logo = styled.img`
  height: 70px;
`;

export const Text = styled.div`
  margin-bottom: 30px;
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const TopText = styled.div`
  margin-bottom: 30px;
`;

export const LessonRequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RequestContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const RequestScreen = styled.img`
  width: 300px;
  @media only screen and (max-width: 768px) {
    width: 220px;
  }  
`;

export const RequestRight = styled.div`
  padding: 335px 0 0 5px;
  @media only screen and (max-width: 768px) {
    font-family: 'Roboto Condensed', sans-serif;
    padding: 245px 0 0 3px;
  }  
`;

export const RequestArrowContainer = styled.div`
  width: 200px;
  display: flex;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 110px;
  }
`;

export const Request = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 110px;
  }   
`;

export const AcceptRequestContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const AcceptRequestLeft = styled.div`
  padding: 292px 5px 0 0;
  @media only screen and (max-width: 768px) {
    font-family: 'Roboto Condensed', sans-serif;  
    padding: 213px 3px 0 0;
  }  
`;

export const AcceptRequestArrowContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 110px;
  }   
`;

export const AcceptRequest = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 110px;
  }   
`;

export const AcceptRequestScreen = styled.img`
  width: 300px;
  @media only screen and (max-width: 768px) {
    width: 220px;
  }   
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: space-between;
  margin-bottom: 50px;  
`;
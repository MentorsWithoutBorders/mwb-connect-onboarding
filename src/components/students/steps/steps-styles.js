import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const StepsContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 110px;
  @media only screen and (max-width: 768px) {
    padding: 120px 0 0 4px;
  }
`;

export const StepContainer = styled.div`
  position: relative;
  width: 180px;
  @media only screen and (max-width: 768px) {
    width: 85px;
  }    
`;

export const OptionContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    gap: 2px;
  }   
`;

export const Icon = styled.img`
  height: 70px;
  @media only screen and (max-width: 768px) {
    height: 48px;
    ${({ isShifted }) => isShifted && `
      margin-left: -3px;
    `}
  }
`;

export const IntroductionArrowContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    top: 19px;
    left: 65px;
  }  
`;

export const ConnectWithMentorArrowContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    top: 19px;
    left: 65px; 
  }  
`;

export const TrainingArrowContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    top: 19px;
    left: 65px;
  }  
`;

export const ArrowLine = styled.div`
  width: 105px;
  height: 3px;
  background: #ccc;
  @media only screen and (max-width: 768px) {
    width: 35px;
  }   
`;

export const Arrow = styled.img`
  width: 5px;
`;
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
  width: 100%; 
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
  width: 150px;
  @media only screen and (max-width: 768px) {
    width: 70px;
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
  left: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    top: 19px;
    left: 55px;
  }  
`;

export const ProfileArrowContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    top: 19px;
    left: 56px;
  }  
`;

export const TrainingArrowContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    top: 19px;
    left: 55px;
  }  
`;

export const LessonRequestArrowContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    top: 19px;
    left: 55px; 
  }  
`;

export const ArrowLine = styled.div`
  width: 75px;
  height: 3px;
  background: #ccc;
  @media only screen and (max-width: 768px) {
    width: 24px;
  }   
`;

export const Arrow = styled.img`
  width: 5px;
`;
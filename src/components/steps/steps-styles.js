import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const ArrowsContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 70px;
  padding-top: 140px;
  @media only screen and (max-width: 768px) {
    width: 380px;
    gap: 42px;
    padding-left: 11px;
  }  
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  @media only screen and (max-width: 768px) {
    width: 31px;
  }  
`;

export const ArrowLine = styled.div`
  width: 75px;
  height: 3px;
  background: #ccc;
  @media only screen and (max-width: 768px) {
    width: 26px;
  }   
`;

export const Arrow = styled.img`
  width: 5px;
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
    width: 380px;
    padding-top: 120px;
  }  
`;

export const StepContainer = styled.div`
  cursor: pointer;
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    gap: 5px;
  }   
`;

export const Icon = styled.img`
  width: 70px;
  ${({ shouldMove }) => shouldMove && `
    margin-left: -3px;
  `}
  @media only screen and (max-width: 768px) {
    width: 50px;
  }
`;
import styled from 'styled-components';

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
  width: 99%;
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-top: 20px;
`;

export const Arrow = styled.img`
  width: 110px;
`;

export const StepsContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 99%;  
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const StepContainer = styled.div`
  cursor: pointer;
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`;

export const Icon = styled.img`
  width: 70px;  
`;
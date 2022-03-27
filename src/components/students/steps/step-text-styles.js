import styled from 'styled-components';

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  ${({ isShifted }) => isShifted && `
    padding-left: 5px;
  `}
  @media only screen and (max-width: 768px) {
    gap: 3px;
  }   
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: #ddd;
  ${({ active }) => active && `
    background-color: #f45101;
  `}
  @media only screen and (max-width: 768px) {
    min-width: 15px;
    max-width: 15px;
    height: 15px;
  }  
`;

export const Number = styled.div`
  font-size: 16px;
  color: #f45101;
  ${({ active }) => active && `
    color: white;
  `}
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }  
`;

export const Text = styled.div`
  font-size: 14px;
  color: #ccc;
  font-weight: 500;
  ${({ active }) => active && `
    color: #f45101;
  `}
  @media only screen and (max-width: 768px) {
    font-family: 'Roboto Condensed', sans-serif;    
    font-size: 12px;
  }
`;
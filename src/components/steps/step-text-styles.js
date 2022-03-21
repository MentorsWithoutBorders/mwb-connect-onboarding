import styled from 'styled-components';

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
    width: 17px;
    height: 17px;
  }  
`;

export const Number = styled.div`
  font-size: 16px;
  color: #f45101;
  ${({ active }) => active && `
    color: white;
  `}
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }  
`;

export const Text = styled.div`
  font-size: 14px;
  color: #ccc;
  font-weight: bold;
  ${({ active }) => active && `
    color: #f45101;
  `}
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }   
`;
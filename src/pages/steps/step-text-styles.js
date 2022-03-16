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
  background-color: #F7DBBE;

  ${({ active }) => active && `
    background-color: #f45101;
  `}  
`;

export const Number = styled.div`
  font-size: 16px;
  color: white;
`;

export const Text = styled.div`
  font-size: 12px;
  color: #999;
  font-weight: bold;

  ${({ active }) => active && `
    color: #f45101;
  `}
`;
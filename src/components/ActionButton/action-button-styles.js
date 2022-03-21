import styled from 'styled-components';

export const StyledActionButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
  border: solid 1px #268EBA;
  border-radius: 25px;
  text-align: center;
  color: white;
  text-decoration: none;
  &:hover {
    background: #268EBA;
    cursor: pointer;
  }
`;
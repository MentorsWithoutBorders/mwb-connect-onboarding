import styled from 'styled-components';

export const StyledActionButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
  background: #F25004;
  border-radius: 25px;
  text-align: center;
  color: white;
  text-decoration: none;
  transition: all .1s linear;
  &:hover {
    background: white;
    box-shadow: 0 0 10px white;
    color: #F80C04;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    &:hover {
      background: #F25004;
      color: white;
      box-shadow: none;
    }
    &:active {
      background: white;
      box-shadow: 0 0 10px white;
      color: #F80C04;
      cursor: pointer;
    }    
  }    
`;
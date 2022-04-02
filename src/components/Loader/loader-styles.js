import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const CoverSpinContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CoverSpin = styled.div`
  font-size: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: calc(50vh - 30px);
  background: #ffffff;
  background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: ${spin} 1.4s infinite linear;
  animation: ${spin} 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  &:before {
    content: '';
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:after {
    content: '';
    background: #03378C;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @media only screen and (max-width: 768px) {
    width: 50px;
    height: 50px;    
    margin-top: calc(50vh - 20px);
  }  
`;
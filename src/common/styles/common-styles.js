import styled from 'styled-components';

export const LineBreak = styled.div`
  width: 100%;
  height: 10px;
`;

export const DownRightArrow = styled.img`
  width: 100px;
  @media only screen and (max-width: 768px) {
    width: 80px;
  }  
`;

export const UpRightArrow = styled.img`
  width: 100px;
  transform: scaleY(-1);
  @media only screen and (max-width: 768px) {
    width: 80px;
  }  
`;

export const DownLeftArrow = styled.img`
  width: 100px;
  transform: scaleX(-1);  
  @media only screen and (max-width: 768px) {
    width: 80px;
  }  
`;

export const UpLeftArrow = styled.img`
  width: 100px;
  transform: scaleX(-1);
  transform: rotate(180deg);
  @media only screen and (max-width: 768px) {
    width: 80px;
  }
`;

export const MobileArrow = styled.img`
  width: 30px;
`;
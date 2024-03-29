import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const Background = styled.div`
  background: radial-gradient(circle at center, #03378C, #01112b);
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  height: 100vh;
  width: 100vw;  
`;

export const Page = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: #ccc;
  @media only screen and (max-width: 768px) {
    color: #eee;
  }
`;

export const Slide = styled.div`
  max-height: ${props => props.height}px;
  margin-top: 140px;
  display: flex !important;
  justify-content: center;
  outline: none;
`;

export const Container = styled.div`
  width: 1000px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledModal = Modal.styled`
  width: 800px;
  padding: 20px 15px 20px 20px;
  display: flex;
  background-color: white;
  border-radius: 20px;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 70%;
    padding: 20px 5px;
  }
`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const LineBreak = styled.div`
  width: 100%;
  height: 10px;
`;

export const BoldText = styled.span`
  font-weight: 500;
`;

export const DownRightArrow = styled.img`
  width: 100px;
  @media only screen and (max-width: 768px) {
    width: 60px;
  }  
`;

export const UpRightArrow = styled.img`
  width: 100px;
  transform: scaleY(-1);
  @media only screen and (max-width: 768px) {
    width: 60px;
  }  
`;

export const DownLeftArrow = styled.img`
  width: 100px;
  transform: scaleX(-1);  
  @media only screen and (max-width: 768px) {
    width: 60px;
  }  
`;

export const UpLeftArrow = styled.img`
  width: 100px;
  transform: scaleX(-1);
  transform: rotate(180deg);
  @media only screen and (max-width: 768px) {
    width: 60px;
  }
`;

export const MobileArrow = styled.img`
  width: 30px;
`;
import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const Page = styled.main`  
  font-size: 15px;
  line-height: 1.5;
  color: #ccc; 
`;

export const Slide = styled.div`
  margin-top: 140px;
  display: flex !important;
  justify-content: center;
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
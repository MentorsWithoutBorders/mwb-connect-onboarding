import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const Page = styled.main`
  background: radial-gradient(#03378C, #01112b);
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
`;

export const StyledModal = Modal.styled`
  width: 800px;
  height: 600px;
  padding: 20px 15px 20px 20px;
  display: flex;
  background-color: white;
  border-radius: 20px;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;
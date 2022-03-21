import styled from 'styled-components';

export const Text = styled.div`
  text-align: center;
  margin: 30px;
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const DownloadContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Download = styled.img`
  height: 60px;
  @media only screen and (max-width: 768px) {
    height: 50px;
  }  
`;
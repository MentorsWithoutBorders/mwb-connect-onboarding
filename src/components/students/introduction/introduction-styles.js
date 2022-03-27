import styled from 'styled-components';

export const Text = styled.div`
  margin-bottom: 30px;
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: space-between;
  margin-bottom: 30px;
`;
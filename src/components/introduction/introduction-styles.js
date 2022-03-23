import styled from 'styled-components';

export const Text = styled.div`
  margin-bottom: 30px;
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const TestimonialsLink = styled.a`
  cursor: pointer;
  font-weight: 500;
  text-decoration: underline;
  color: #2db2ea;
`;

export const OrganizationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-bottom: 30px;
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }  
`;

export const OrganizationContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  aspect-ratio: 1.2 / 1;
  background: white;
  border-radius: 20px;
  @media only screen and (max-width: 768px) {
    width: 40vw;
    height: 20vh;
  }
`;

export const Organization = styled.img`
  max-width: 80%;
  max-height: 80%; 
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: space-between;
  margin-bottom: 30px;
`;
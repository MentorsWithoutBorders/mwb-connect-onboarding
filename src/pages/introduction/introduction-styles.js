import styled from 'styled-components';

export const Text = styled.div`
  margin-bottom: 30px;
`;

export const TestimonialsLink = styled.a`
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
`;

export const OrganizationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-bottom: 30px;
`;

export const OrganizationContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 190px;
  background: white;
  border-radius: 20px;
`;

export const Organization = styled.img`
  max-width: 180px;
  max-height: 150px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: space-between;
`;
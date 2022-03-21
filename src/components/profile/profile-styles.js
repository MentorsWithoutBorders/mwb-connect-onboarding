import styled from 'styled-components';

export const Content = styled.div`
  margin-bottom: 30px;
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const TopText = styled.div`
  margin-bottom: 30px;
`;

export const ProfileContainerDesktop = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px; 
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProfileContainerMobile = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
`;

export const ProfileScreen = styled.img`
  width: 300px;
  @media only screen and (max-width: 768px) {
    width: 230px;
  }  
`;

export const ProfileLeft = styled.div`
  padding: 30px 5px 0 0;
  @media only screen and (max-width: 768px) {
    width: 150px;
    padding: 88px 5px 0 0;    
  }   
`;

export const ProfileRight = styled.div`
  padding: 170px 0 0 5px;
`;

export const ChooseFieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ChooseField = styled.div`
  width: 200px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    padding: 0 10px 0 0;
  }  
`;

export const ChooseFieldArrowContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 85px;
  @media only screen and (max-width: 768px) {
    width: 50px;
    height: 15px;
    padding-bottom: 0;
  }
`;

export const AddSkillsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 120px;
`;

export const AddSkills = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    padding: 0 10px 0 0;        
  }   
`;

export const AddSkillsArrowContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 50px;
    height: 15px;
  }  
`;

export const AddSubfieldsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

export const AddSubfields = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 85px;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    padding: 0 10px 0 0;
  }   
`;

export const AddSubfieldsArrowContainer = styled.div`
  width: 200px;
  display: flex;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    justify-content: flex-end;    
    width: 50px;
    height: 15px;
    padding-bottom: 0;
  }  
`;

export const AddAvailabilitiesContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AddAvailabilities = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    padding: 0 10px 0 0;    
  }   
`;

export const AddAvailabilitiesArrowContainer = styled.div`
  width: 200px;
  display: flex;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    justify-content: flex-end;    
    width: 50px;
    height: 15px;
  }  
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: space-between;
`;
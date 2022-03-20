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

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px; 
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const ProfileScreen = styled.img`
  width: 300px;
`;

export const ProfileLeft = styled.div`
  padding: 30px 5px 0 0;
`;

export const ProfileRight = styled.div`
  padding: 170px 0 0 5px;
`;

export const ChooseField = styled.div`
  width: 200px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 5px;
`;

export const ChooseFieldArrowContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: right;
  padding-bottom: 85px;
`;

export const AddSkills = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
`;

export const AddSkillsArrowContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: right;
  padding-bottom: 5px;
`;

export const AddSubfields = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 85px;
`;

export const AddSubfieldsArrowContainer = styled.div`
  width: 200px;
  display: flex;
  padding-bottom: 5px;
`;

export const AddAvailabilities = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
`;

export const AddAvailabilitiesArrowContainer = styled.div`
  width: 200px;
  display: flex;
  padding-bottom: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: space-between;
`;
import styled from 'styled-components';

export const Text = styled.main`
  margin-bottom: 30px;
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const TopText = styled.div`
  margin-bottom: 30px;
`;

export const TrainingExercisesContainer = styled.div`
  display: flex;
  gap: 15px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }  
`;

export const TrainingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TrainingGoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const TrainingGoScreen = styled.img`
  width: 300px;
  @media only screen and (max-width: 768px) {
    width: 220px;
  }   
`;

export const TrainingGoRight = styled.div`
  padding: 287px 0 0 5px;
  @media only screen and (max-width: 768px) {
    font-family: 'Roboto Condensed', sans-serif;    
    padding: 212px 0 0 3px;
  }
`;

export const TrainingGoArrowContainer = styled.div`
  width: 200px;
  display: flex;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 110px;
  }
`;

export const TrainingGo = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 110px;
  }  
`;

export const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const QuizLeft = styled.div`
  padding: 300px 5px 0 0;
  @media only screen and (max-width: 768px) {
    font-family: 'Roboto Condensed', sans-serif;        
    padding: 221px 3px 0 0;
  }  
`;

export const SolveQuizzesArrowContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 110px;
  }  
`;

export const SolveQuizzes = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 110px;
  }  
`;

export const QuizScreen = styled.img`
  width: 300px;
  @media only screen and (max-width: 768px) {
    width: 220px;
  }  
`;

export const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const StepsScreen = styled.img`
  width: 300px;
  @media only screen and (max-width: 768px) {
    width: 220px;
  }
`;

export const StepsRight = styled.div`
  padding: 346px 0 0 5px;
  @media only screen and (max-width: 768px) {
    font-family: 'Roboto Condensed', sans-serif;    
    padding: 254px 0 0 3px;
  }   
`;

export const AddStepsArrowContainer = styled.div`
  width: 200px;
  display: flex;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 110px;
  }   
`;

export const AddSteps = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 110px;
  }   
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-between;
  margin: 0 20px;
  padding-bottom: 50px;
`;
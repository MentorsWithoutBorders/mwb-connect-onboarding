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

export const GoalContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const GoalScreen = styled.img`
  width: 300px;
  @media only screen and (max-width: 768px) {
    width: 230px;
  }   
`;

export const GoalRight = styled.div`
  padding: 177px 0 0 5px;
  @media only screen and (max-width: 768px) {
    padding-top: 136px;
  }
`;

export const AddGoalArrowContainer = styled.div`
  width: 200px;
  display: flex;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 150px;
  }
`;

export const AddGoal = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 150px;
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
    padding-top: 230px;
  }  
`;

export const SolveQuizzesArrowContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 150px;
  }  
`;

export const SolveQuizzes = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 150px;
  }  
`;

export const QuizScreen = styled.img`
  width: 300px;
  @media only screen and (max-width: 768px) {
    width: 230px;
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
    width: 230px;
  }
`;

export const StepsRight = styled.div`
  padding: 300px 0 0 5px;
  @media only screen and (max-width: 768px) {
    padding-top: 230px;
  }   
`;

export const AddStepsArrowContainer = styled.div`
  width: 200px;
  display: flex;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 150px;
  }   
`;

export const AddSteps = styled.div`
  width: 200px;
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
  @media only screen and (max-width: 768px) {
    width: 150px;
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
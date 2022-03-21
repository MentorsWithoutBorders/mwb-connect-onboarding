import * as React from 'react'
import { ActionButton } from 'components/ActionButton/action-button.js';
import { LineBreak, UpRightArrow, UpLeftArrow } from 'common/styles/common-styles.js';
import { Text, TopText, TrainingExercisesContainer, TrainingContainer, GoalContainer, GoalScreen, GoalRight, AddGoalArrowContainer, AddGoal, QuizContainer, QuizLeft, SolveQuizzes, SolveQuizzesArrowContainer, QuizScreen, StepsContainer, StepsScreen, StepsRight, AddStepsArrowContainer, AddSteps, ButtonsContainer } from './training-styles.js';
import { TrainingExercise } from './training-exercise.js';
import GoalImg from 'images/mentor-goal.png';
import QuizImg from 'images/mentor-quiz.png';
import StepsImg from 'images/mentor-steps.png';
import DesktopArrowImg from 'images/desktop-arrow.png';

export const Training = ({scrollNext, onClickDownload}) => {
  return (
    <div>
      <Text>
        <TopText>Apart from sharing with the students their professional knowledge and skills, the mentors are also teaching them how to <b>set very clear and specific professional goals</b> and how to <b>pursue these goals with a lot of patience, joy, and efficiency</b>.
        <p>For this purpose, we are teaching <b>3 very simple, yet extremely powerful exercises</b>:</p>
        <TrainingExercisesContainer>
          <TrainingExercise 
            title = 'Mental process goal/steps'
            text = {<span>which helps our students generate a continuous stream of <b>ideas, energy, and confidence</b> channeled towards their goals.</span>}/>
          <TrainingExercise 
            title = 'Quick and deep relaxation methods'
            text = {<span>which allow our students to transition from any negative state (e.g. impatience, frustration, discouragement, worry, stress, etc.) to <b>a very pleasant, relaxed state.</b></span>}/>
          <TrainingExercise 
            title = 'Super-focus method'
            text = {<span>which allows our students to <b>immerse themselves more and more</b> in each and every step that they are taking.</span>}/>          
        </TrainingExercisesContainer>
        <p>In order to explain these 3 exercises efficiently to your students, we will kindly ask you to <b>practice them for 1 month</b> in the following way:</p></TopText>
        <TrainingContainer>
          <GoalContainer>
            <GoalScreen src={GoalImg} alt="Goal"/>
            <GoalRight>
              <AddGoalArrowContainer>
                <UpLeftArrow src={DesktopArrowImg} alt=""/>
              </AddGoalArrowContainer>
              <AddGoal>Add a medium or long-term goal <u>of your own</u></AddGoal>        
            </GoalRight>
          </GoalContainer>
          <QuizContainer>
            <QuizLeft>
              <SolveQuizzesArrowContainer>
                <UpRightArrow src={DesktopArrowImg} alt=""/>
              </SolveQuizzesArrowContainer>
              <SolveQuizzes>Solve 3 quizzes each week for 1 month</SolveQuizzes>
            </QuizLeft>
            <QuizScreen src={QuizImg} alt="Quiz"/>            
          </QuizContainer>
          <StepsContainer>
            <StepsScreen src={StepsImg} alt="Steps"/>
            <StepsRight>
              <AddStepsArrowContainer>
                <UpLeftArrow src={DesktopArrowImg} alt=""/>
              </AddStepsArrowContainer>
              <AddSteps>Add at least one step per week for 1 month</AddSteps>        
            </StepsRight>
          </StepsContainer>          
        </TrainingContainer>          
      </Text>     
      <ButtonsContainer>
        <ActionButton text="Find out more about how to accept lesson requests >>" onClick={scrollNext}/>
        <LineBreak />
        or
        <LineBreak />
        <ActionButton text="Download the MWB Connect app >>" onClick={onClickDownload}/>
      </ButtonsContainer>
    </div>
  )
}
import * as React from 'react'
import { ActionButton } from 'components/ActionButton/action-button.js';
import { BoldText, UpRightArrow, UpLeftArrow } from 'common/styles/common-styles.js';
import { Text, TopText, TrainingExercisesContainer, TrainingContainer, TrainingGoContainer, TrainingGoScreen, TrainingGoRight, TrainingGoArrowContainer, TrainingGo, QuizContainer, QuizLeft, SolveQuizzes, SolveQuizzesArrowContainer, QuizScreen, StepsContainer, StepsScreen, StepsRight, AddStepsArrowContainer, AddSteps, ButtonsContainer } from './training-styles.js';
import { TrainingExercise } from './training-exercise.js';
import TrainingGoImg from 'images/student-training-go.png';
import QuizImg from 'images/student-quiz.png';
import StepsImg from 'images/student-steps.png';
import DesktopArrowImg from 'images/desktop-arrow.png';

export const Training = ({onClickDownload}) => {
  return (
    <div>
      <Text>
        <TopText>Apart from doing lessons with your mentors, we would also like you to <BoldText>set a very clear and specific professional goal</BoldText> and we'll teach you how to <BoldText>pursue this goal with a lot of patience, joy, and efficiency</BoldText>.
        <p>For this purpose, we are teaching <BoldText>3 very simple, yet extremely powerful exercises</BoldText>:</p>
        <TrainingExercisesContainer>
          <TrainingExercise 
            title = 'Mental process goal/steps'
            text = {<span>which helps you generate a continuous stream of <BoldText>ideas, energy, and confidence</BoldText> channeled towards your goal.</span>}/>
          <TrainingExercise 
            title = 'Quick and deep relaxation methods'
            text = {<span>which allows you to transition from any negative state (e.g. impatience, frustration, discouragement, worry, stress, etc.) to <BoldText>a very pleasant, relaxed state.</BoldText></span>}/>
          <TrainingExercise 
            title = 'Super-focus method'
            text = {<span>which allows you to <BoldText>immerse yourself more and more</BoldText> in each and every step that you are taking.</span>}/>          
        </TrainingExercisesContainer>
        <p>In order receive the <BoldText>MWB certificate</BoldText> after 3 months, we will kindly ask you to <BoldText>practice the exercises from above</BoldText> in the following way:</p></TopText>
        <TrainingContainer>
          <TrainingGoContainer>
            <TrainingGoScreen src={TrainingGoImg} alt="TrainingGo"/>
            <TrainingGoRight>
              <TrainingGoArrowContainer>
                <UpLeftArrow src={DesktopArrowImg} alt=""/>
              </TrainingGoArrowContainer>
              <TrainingGo>Press this button on the home screen</TrainingGo>        
            </TrainingGoRight>
          </TrainingGoContainer>
          <QuizContainer>
            <QuizLeft>
              <SolveQuizzesArrowContainer>
                <UpRightArrow src={DesktopArrowImg} alt=""/>
              </SolveQuizzesArrowContainer>
              <SolveQuizzes>Solve 3 quizzes each week for 3 months</SolveQuizzes>
            </QuizLeft>
            <QuizScreen src={QuizImg} alt="Quiz"/>            
          </QuizContainer>
          <StepsContainer>
            <StepsScreen src={StepsImg} alt="Steps"/>
            <StepsRight>
              <AddStepsArrowContainer>
                <UpLeftArrow src={DesktopArrowImg} alt=""/>
              </AddStepsArrowContainer>
              <AddSteps>Add at least one step per week for 3 months</AddSteps>        
            </StepsRight>
          </StepsContainer>
        </TrainingContainer>          
      </Text>     
      <ButtonsContainer>
        <ActionButton text="Download the MWB Connect app >>" onClick={onClickDownload}/>
      </ButtonsContainer>
    </div>
  )
}
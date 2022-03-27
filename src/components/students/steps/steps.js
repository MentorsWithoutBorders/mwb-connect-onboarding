import * as React from 'react'
import { Main, LogoContainer, Logo, OptionContainer, IntroductionArrowContainer, TrainingArrowContainer, LessonRequestArrowContainer, ArrowLine, Arrow, StepsContainer, StepContainer, Icon } from './steps-styles.js';
import { StepText } from './step-text.js';
import * as constants from 'utils/constants.js';
import LogoImg from 'images/mwb-logo.png';
import ArrowImg from 'images/steps-arrow.png';
import IntroductionActiveIcon from 'images/introduction-active-icon.png';
import IntroductionInactiveIcon from 'images/introduction-inactive-icon.png';
import TrainingActiveIcon from 'images/training-active-icon.png';
import TrainingInactiveIcon from 'images/training-inactive-icon.png';
import LessonRequestActiveIcon from 'images/lesson-request-active-icon.png';
import LessonRequestInactiveIcon from 'images/lesson-request-inactive-icon.png';
import DownloadAppActiveIcon from 'images/download-app-active-icon.png';
import DownloadAppInactiveIcon from 'images/download-app-inactive-icon.png';

export const Steps = ({activeStep, goToIntroduction, goToConnectWithMentor, goToTraining, goToDownload}) => {
  return (
    <Main>
      <LogoContainer>
        <Logo src={LogoImg} alt="MWB logo"/>
      </LogoContainer>    
      <StepsContainer>
        <StepContainer onClick={goToIntroduction}>
          <OptionContainer>
            <Icon src={activeStep === constants.STUDENT_INTRODUCTION ? IntroductionActiveIcon : IntroductionInactiveIcon} isShifted={true} alt="Introduction"/>
            <StepText number='1' text='Introduction' isActive={activeStep === constants.STUDENT_INTRODUCTION}/>
          </OptionContainer>
          <IntroductionArrowContainer>
            <ArrowLine/>
            <Arrow src={ArrowImg}/>
          </IntroductionArrowContainer>          
        </StepContainer>
        <StepContainer onClick={goToConnectWithMentor}>
          <OptionContainer>
            <Icon src={activeStep === constants.STUDENT_CONNECT_WITH_MENTOR ? LessonRequestActiveIcon : LessonRequestInactiveIcon} alt="Connect with a mentor"/>
            <StepText number='2' text='Connect with a mentor' isActive={activeStep === constants.STUDENT_CONNECT_WITH_MENTOR} isShifted={true}/>
          </OptionContainer>
          <LessonRequestArrowContainer>
            <ArrowLine/>
            <Arrow src={ArrowImg}/>
          </LessonRequestArrowContainer>          
        </StepContainer>        
        <StepContainer onClick={goToTraining}>
          <OptionContainer>
            <Icon src={activeStep === constants.STUDENT_TRAINING ? TrainingActiveIcon : TrainingInactiveIcon} alt="Training"/>
            <StepText number='3' text='Training' isActive={activeStep === constants.STUDENT_TRAINING} isShifted={true}/>
          </OptionContainer>
          <TrainingArrowContainer>
            <ArrowLine/>
            <Arrow src={ArrowImg}/>
          </TrainingArrowContainer>          
        </StepContainer>
        <StepContainer onClick={goToDownload}>
          <OptionContainer>
            <Icon src={activeStep === constants.STUDENT_DOWNLOAD_APP ? DownloadAppActiveIcon : DownloadAppInactiveIcon} alt="Download app"/>
            <StepText number='4' text='Download app' isActive={activeStep === constants.STUDENT_DOWNLOAD_APP}/>
          </OptionContainer>         
        </StepContainer>
      </StepsContainer>    
    </Main>
  )
}
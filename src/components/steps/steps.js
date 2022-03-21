import * as React from 'react'
import { Main, LogoContainer, Logo, ArrowsContainer, ArrowContainer, ArrowLine, Arrow, StepsContainer, StepContainer, Icon } from './steps-styles.js';
import { StepText } from './step-text.js';
import * as constants from 'utils/constants.js';
import LogoImg from 'images/mwb-logo.png';
import ArrowImg from 'images/steps-arrow.png';
import IntroductionActiveIcon from 'images/introduction-active-icon.png';
import IntroductionInactiveIcon from 'images/introduction-inactive-icon.png';
import ProfileActiveIcon from 'images/profile-active-icon.png';
import ProfileInactiveIcon from 'images/profile-inactive-icon.png';
import TrainingActiveIcon from 'images/training-active-icon.png';
import TrainingInactiveIcon from 'images/training-inactive-icon.png';
import LessonRequestActiveIcon from 'images/lesson-request-active-icon.png';
import LessonRequestInactiveIcon from 'images/lesson-request-inactive-icon.png';
import DownloadAppActiveIcon from 'images/download-app-active-icon.png';
import DownloadAppInactiveIcon from 'images/download-app-inactive-icon.png';

export const Steps = ({activeStep, goToIntroduction, goToProfile, goToTraining, goToLessonRequest, goToDownload}) => {
  return (
    <Main>
      <LogoContainer>
        <Logo src={LogoImg} alt="MWB logo"/>
      </LogoContainer>
      <ArrowsContainer>
        <ArrowContainer>
          <ArrowLine/>
          <Arrow src={ArrowImg}/>
        </ArrowContainer>
        <ArrowContainer>
          <ArrowLine/>
          <Arrow src={ArrowImg}/>
        </ArrowContainer>
        <ArrowContainer>
          <ArrowLine/>
          <Arrow src={ArrowImg}/>
        </ArrowContainer>
        <ArrowContainer>
          <ArrowLine/>
          <Arrow src={ArrowImg}/>
        </ArrowContainer>
      </ArrowsContainer>      
      <StepsContainer>
        <StepContainer onClick={goToIntroduction}>
          <Icon src={activeStep === constants.MENTOR_INTRODUCTION ? IntroductionActiveIcon : IntroductionInactiveIcon} isIntroduction={true} alt="Introduction"/>
          <StepText number='1' text='Introduction' isActive={activeStep === constants.MENTOR_INTRODUCTION}/>
        </StepContainer>        
        <StepContainer onClick={goToProfile}>
          <Icon src={activeStep === constants.MENTOR_PROFILE ? ProfileActiveIcon : ProfileInactiveIcon} alt="Profile"/>
          <StepText number='2' text='Profile' isActive={activeStep === constants.MENTOR_PROFILE}/>
        </StepContainer>
        <StepContainer onClick={goToTraining}>
          <Icon src={activeStep === constants.MENTOR_TRAINING ? TrainingActiveIcon : TrainingInactiveIcon} alt="Training"/>
          <StepText number='3' text='Training' isActive={activeStep === constants.MENTOR_TRAINING}/>
        </StepContainer>
        <StepContainer onClick={goToLessonRequest}>
          <Icon src={activeStep === constants.MENTOR_LESSON_REQUEST ? LessonRequestActiveIcon : LessonRequestInactiveIcon} alt="Lesson request"/>
          <StepText number='4' text='Lesson request' isActive={activeStep === constants.MENTOR_LESSON_REQUEST}/>
        </StepContainer>
        <StepContainer onClick={goToDownload}>
          <Icon src={activeStep === constants.MENTOR_DOWNLOAD_APP ? DownloadAppActiveIcon : DownloadAppInactiveIcon} alt="Download app"/>
          <StepText number='5' text='Download app' isActive={activeStep === constants.MENTOR_DOWNLOAD_APP}/>
        </StepContainer>
      </StepsContainer>    
    </Main>
  )
}
import * as React from 'react'
import { LogoContainer, Logo, ArrowsContainer, Arrow, StepsContainer, StepContainer,  Icon } from './steps-styles.js';
import { StepText } from './step-text.js';
import * as constants from 'utils/constants.js';
import LogoImg from 'images/mwb-logo.png';
import ArrowImg from 'images/desktop-steps-arrow.png';
import ProfileIcon from 'images/profile-icon.png';
import TrainingIcon from 'images/training-icon.png';
import LessonRequestIcon from 'images/lesson-request-icon.png';
import DownloadAppIcon from 'images/download-app-icon.png';

export const Steps = ({activeStep, goToProfile, goToTraining, goToLessonRequest, goToDownload}) => {
  return (
    <div>
      <LogoContainer>
        <Logo src={LogoImg} alt="Logo"/>
      </LogoContainer>
      <ArrowsContainer>
        <Arrow src={ArrowImg} alt="Logo"/>
        <Arrow src={ArrowImg} alt="Logo"/>
        <Arrow src={ArrowImg} alt="Logo"/>
      </ArrowsContainer>      
      <StepsContainer>
        <StepContainer onClick={goToProfile}>
          <Icon src={ProfileIcon} alt="Profile"/>
          <StepText number='1' text='Profile' isActive={activeStep === constants.MENTOR_PROFILE}/>
        </StepContainer>
        <StepContainer onClick={goToTraining}>
          <Icon src={TrainingIcon} alt="Training"/>
          <StepText number='2' text='Training' isActive={activeStep === constants.MENTOR_TRAINING}/>
        </StepContainer>
        <StepContainer onClick={goToLessonRequest}>
          <Icon src={LessonRequestIcon} alt="Lesson request"/>
          <StepText number='3' text='Lesson request' isActive={activeStep === constants.MENTOR_LESSON_REQUEST}/>
        </StepContainer>
        <StepContainer onClick={goToDownload}>
          <Icon src={DownloadAppIcon} alt="Download app"/>
          <StepText number='4' text='Download app' isActive={activeStep === constants.MENTOR_DOWNLOAD_APP}/>
        </StepContainer>
      </StepsContainer>    
    </div>
  )
}
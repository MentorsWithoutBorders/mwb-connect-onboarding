import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Page, Slide, Container } from './index-styles.js';
import * as constants from 'utils/constants.js';
import { Steps } from './steps/steps.js';
import { Profile } from './profile/profile.js';
import { Training } from './training/training.js';
import { LessonRequest } from './lesson-request/lesson-request.js';
import { DownloadApp } from './download-app/download-app.js';

export default class IndexPage extends React.Component {
  state = {
    activeStep: constants.MENTOR_PROFILE
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      onSwipe: (direction) => setActiveStepOnScroll(direction),
      afterChange: (index) => scrollToTop(index)
    };

    const setActiveStepOnScroll = (direction) => {
      if (direction === 'left') {
        if (this.state.activeStep < constants.MENTOR_DOWNLOAD_APP) {
          setActiveStep(this.state.activeStep + 1);
        }
      } else {
        if (this.state.activeStep > constants.MENTOR_PROFILE) {
          setActiveStep(this.state.activeStep - 1);
        }        
      }
    };    

    const setActiveStep = (index) => {
      this.setState({activeStep: index});
    };

    const scrollToTop = (index) => {
      setActiveStep(index);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    const scrollNext = () => {
      setActiveStepOnScroll('left');
      this.slider.slickNext();
    };
    
    const goToProfile = () => {
      setActiveStep(constants.MENTOR_PROFILE);
      this.slider.slickGoTo(constants.MENTOR_PROFILE);
    };

    const goToTraining = () => {
      setActiveStep(constants.MENTOR_TRAINING);
      this.slider.slickGoTo(constants.MENTOR_TRAINING);
    };

    const goToLessonRequest = () => {
      setActiveStep(constants.MENTOR_LESSON_REQUEST);
      this.slider.slickGoTo(constants.MENTOR_LESSON_REQUEST);
    };     

    const goToDownload = () => {
      setActiveStep(constants.MENTOR_DOWNLOAD_APP);
      this.slider.slickGoTo(constants.MENTOR_DOWNLOAD_APP);
    };

    return (
      <Page>
        <title>MWB Connect Onboarding</title>
        <Steps activeStep={this.state.activeStep} goToProfile={goToProfile} goToTraining={goToTraining} goToLessonRequest={goToLessonRequest} goToDownload={goToDownload}/>
        <Slider ref={slider => (this.slider = slider)} arrows={false} {...settings}>
          <Slide>
            <Container>
              <Profile scrollNext={scrollNext} onClickDownload={goToDownload}></Profile>
            </Container> 
          </Slide>  
          <Slide>
            <Container>
              <Training scrollNext={scrollNext} onClickDownload={goToDownload}></Training>
            </Container> 
          </Slide>
          <Slide>
            <Container>
              <LessonRequest onClickDownload={goToDownload}></LessonRequest>
            </Container> 
          </Slide>
          <Slide>
            <Container>
              <DownloadApp/>
            </Container> 
          </Slide>
        </Slider>
      </Page>
    )
  }
}
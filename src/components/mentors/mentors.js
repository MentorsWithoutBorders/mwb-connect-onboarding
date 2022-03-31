import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { animateScroll as scroll } from 'react-scroll';
import { ModalProvider } from 'styled-react-modal';
import { Background, Page, Slide, Container, StyledModal, FadingBackground } from 'common/styles/common-styles.js';
import * as constants from 'utils/constants.js';
import { Steps } from './steps/steps.js';
import { Introduction } from './introduction/introduction.js';
import { Profile } from './profile/profile.js';
import { Training } from './training/training.js';
import { LessonRequest } from './lesson-request/lesson-request.js';
import { DownloadApp } from './download-app/download-app.js';
import { Testimonials } from './introduction/testimonials.js';

const MAX_SLIDE_HEIGHT = 5000;
const SLIDER_SPEED = 500;
const SCROLL_TO_TOP_SPEED = 400;
const SLIDE_BLOCKED_TIME = 200;

export class Mentors extends React.Component {
  state = {
    activeStep: constants.MENTOR_INTRODUCTION,
    activeStepEnabled: constants.MENTOR_INTRODUCTION,
    isOpenModal: false,
    modalOpacity: 0,
    slidesHeights: [],
    isTransitionFinished: true,
    isSwipeAllowed: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.resetSlidesHeights();
      this.setSlidesHeights();
    }, 600);
  }

  setSlidesHeights() {
    this.setState({
      slidesHeights: [
        this.setSlideHeight(this.introduction.clientHeight),
        this.setSlideHeight(this.profile.clientHeight),
        this.setSlideHeight(this.training.clientHeight),
        this.setSlideHeight(this.lessonRequest.clientHeight),
        this.setSlideHeight(this.downloadApp.clientHeight)
      ]
    })
  }

  resetSlidesHeights() {
    this.setState({
      slidesHeights: [
        this.setSlideHeight(MAX_SLIDE_HEIGHT),
        this.setSlideHeight(MAX_SLIDE_HEIGHT),
        this.setSlideHeight(MAX_SLIDE_HEIGHT),
        this.setSlideHeight(MAX_SLIDE_HEIGHT),
        this.setSlideHeight(MAX_SLIDE_HEIGHT)
      ]
    })
  }

  setSlideHeight(height) {
    if (height < window.innerHeight) {
      return window.innerHeight + 50;
    }
    return height;
  }
  
  render() {
    const sliderSettings = {
      dots: false,
      infinite: false,
      speed: SLIDER_SPEED,
      slidesToShow: 1,
      slidesToScroll: 1,
      onSwipe: (direction) => setActiveStepOnScroll(direction)
    };

    const setActiveStepOnScroll = (direction) => {
      if (direction === 'left') {
        if (this.state.activeStep < constants.MENTOR_DOWNLOAD_APP) {
          setActiveStep(this.state.activeStep + 1);
        }
      } else {
        if (this.state.activeStep > constants.MENTOR_INTRODUCTION) {
          setActiveStep(this.state.activeStep - 1);
        }        
      }
    };    

    const setActiveStep = (index) => {
      setIsTransitionFinished(false);
      this.setState({activeStep: index});
      setTimeout(() => {
        setIsSwipeAllowed(true);
        setTimeout(() => {
          setIsSwipeAllowed(true);
        }, SLIDE_BLOCKED_TIME);        
      }, SLIDER_SPEED); 
      setTimeout(() => {
        scrollToTop();
        if (isStepsInViewport()) {
          setActiveStepEnabled(index);
          this.resetSlidesHeights();
          this.setSlidesHeights();
          setTimeout(() => {
            setIsTransitionFinished(true);
          }, 50);
        } else {
          setTimeout(() => {
            setActiveStepEnabled(index);
            this.resetSlidesHeights();
            this.setSlidesHeights();
            setTimeout(() => {
              setIsTransitionFinished(true);
            }, 50);       
          }, SCROLL_TO_TOP_SPEED);         
        }
      }, SLIDER_SPEED + 50);      
    };

    const setActiveStepEnabled = (index) => {
      this.setState({activeStepEnabled: index});
    }
  
    const setIsTransitionFinished = (isTransitionFinished) => {
      this.setState({isTransitionFinished});
    }

    const setIsSwipeAllowed = (isSwipeAllowed) => {
      this.setState({isSwipeAllowed});
    }    

    const isStepsInViewport = () => {
      if (!this.steps) return false;
      const top = this.steps.getBoundingClientRect().top;
      return (top + 300) >= 0 && (top - 300) <= window.innerHeight;
    }    

    const scrollToTop = () => {
      scroll.scrollToTop({
        duration: SCROLL_TO_TOP_SPEED,
        delay: 0,
        smooth: true
      });      
    };

    const scrollNext = () => {
      setActiveStepOnScroll('left');
      this.slider.slickNext();
    };

    const goToIntroduction = () => {
      if (this.state.isTransitionFinished) {
        setActiveStep(constants.MENTOR_INTRODUCTION);
        this.slider.slickGoTo(constants.MENTOR_INTRODUCTION);
      }
    };    
    
    const goToProfile = () => {
      if (this.state.isTransitionFinished) {      
        setActiveStep(constants.MENTOR_PROFILE);
        this.slider.slickGoTo(constants.MENTOR_PROFILE);
      }
    };

    const goToTraining = () => {
      if (this.state.isTransitionFinished) {      
        setActiveStep(constants.MENTOR_TRAINING);
        this.slider.slickGoTo(constants.MENTOR_TRAINING);
      }
    };

    const goToLessonRequest = () => {
      if (this.state.isTransitionFinished) {      
        setActiveStep(constants.MENTOR_LESSON_REQUEST);
        this.slider.slickGoTo(constants.MENTOR_LESSON_REQUEST);
      }
    };     

    const goToDownload = () => {
      if (this.state.isTransitionFinished) {      
        setActiveStep(constants.MENTOR_DOWNLOAD_APP);
        this.slider.slickGoTo(constants.MENTOR_DOWNLOAD_APP);
      }
    };

    const toggleModal = (e) => {
      this.setState({modalOpacity: 0});
      this.setState({isOpenModal: !this.state.isOpenModal});
    }
  
    const afterOpenModal = () => {
      setTimeout(() => {
        this.setState({modalOpacity: 1});
      }, 100);
    }
  
    const beforeCloseModal = () => {
      return new Promise((resolve) => {
        this.setState({modalOpacity: 0});
        setTimeout(resolve, 300);
      });
    }

    return (
      <ModalProvider backgroundComponent={FadingBackground}>
        <Background/>
        <Page>
          <title>MWB Connect Onboarding</title>
          <div ref={(steps) => this.steps = steps}>
            <Steps activeStep={this.state.activeStep} goToIntroduction={goToIntroduction} goToProfile={goToProfile} goToTraining={goToTraining} 
            goToLessonRequest={goToLessonRequest} goToDownload={goToDownload}/>
          </div>
          <Slider
            ref={slider => (this.slider = slider)}
            arrows={false}
            useTransform={false}
            swipe={this.state.isSwipeAllowed}
            {...sliderSettings}>
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(introduction) => this.introduction = introduction}>
                <Introduction partners={this.props.partners} scrollNext={scrollNext} toggleModal={toggleModal}/>
              </Container> 
            </Slide>
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(profile) => this.profile = profile}>
                <Profile scrollNext={scrollNext} onClickDownload={goToDownload}/>
              </Container> 
            </Slide>  
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(training) => this.training = training }>
                <Training scrollNext={scrollNext} onClickDownload={goToDownload}/>
              </Container> 
            </Slide>
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(lessonRequest) => this.lessonRequest = lessonRequest}>
                <LessonRequest onClickDownload={goToDownload}/>
              </Container> 
            </Slide>
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(downloadApp) => this.downloadApp = downloadApp}>
                <DownloadApp location={this.props.location}/>
              </Container> 
            </Slide>
          </Slider>
        </Page>
        <StyledModal
          isOpen={this.state.isOpenModal}
          afterOpen={afterOpenModal}
          beforeClose={beforeCloseModal}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
          opacity={this.state.modalOpacity}
          allowScroll={true}
        >
          <Testimonials testimonials={this.props.testimonials} toggleModal={toggleModal}/>
        </StyledModal>        
      </ModalProvider>
    )
  }
}
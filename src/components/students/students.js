import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { animateScroll as scroll } from 'react-scroll';
import { Background, Page, Slide, Container } from 'common/styles/common-styles.js';
import * as constants from 'utils/constants.js';
import { Steps } from './steps/steps.js';
import { Introduction } from './introduction/introduction.js';
import { Training } from './training/training.js';
import { ConnectWithMentor } from './connect-with-mentor/connect-with-mentor.js';
import { DownloadApp } from './download-app/download-app.js';

const MAX_SLIDE_HEIGHT = 5000;
const SLIDER_SPEED = 500;
const SCROLL_TO_TOP_SPEED = 400;
const SLIDE_BLOCKED_TIME = 200;

export class Students extends React.Component {
  state = {
    activeStep: constants.STUDENT_INTRODUCTION,
    activeStepEnabled: constants.STUDENT_INTRODUCTION,
    isOpenModal: false,
    modalOpacity: 0,
    slidesHeights: [],
    isTransitionFinished: true,
    isSwipeAllowed: true
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.resetSlidesHeights();
  //     this.setSlidesHeights();
  //   }, 600);
  // }

  setSlidesHeights() {
    this.setState({
      slidesHeights: [
        this.setSlideHeight(this.introduction.clientHeight),
        this.setSlideHeight(this.connectWithMentor.clientHeight),
        this.setSlideHeight(this.training.clientHeight),
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
        if (this.state.activeStep < constants.STUDENT_DOWNLOAD_APP) {
          setActiveStep(this.state.activeStep + 1);
        }
      } else {
        if (this.state.activeStep > constants.STUDENT_INTRODUCTION) {
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
        setActiveStep(constants.STUDENT_INTRODUCTION);
        this.slider.slickGoTo(constants.STUDENT_INTRODUCTION);
      }
    };
    
    const goToConnectWithMentor = () => {
      if (this.state.isTransitionFinished) {      
        setActiveStep(constants.STUDENT_CONNECT_WITH_MENTOR);
        this.slider.slickGoTo(constants.STUDENT_CONNECT_WITH_MENTOR);
      }
    };
    
    const goToTraining = () => {
      if (this.state.isTransitionFinished) {      
        setActiveStep(constants.STUDENT_TRAINING);
        this.slider.slickGoTo(constants.STUDENT_TRAINING);
      }
    };

    const goToDownload = () => {
      if (this.state.isTransitionFinished) {      
        setActiveStep(constants.STUDENT_DOWNLOAD_APP);
        this.slider.slickGoTo(constants.STUDENT_DOWNLOAD_APP);
      }
    };

    return (
      <div>
        <Background/>
        <Page>
          <title>MWB Connect Onboarding</title>
          <div ref={(steps) => this.steps = steps}>
            <Steps activeStep={this.state.activeStep} goToIntroduction={goToIntroduction} goToConnectWithMentor={goToConnectWithMentor} goToTraining={goToTraining} goToDownload={goToDownload}/>
          </div>
          <Slider
            ref={slider => (this.slider = slider)}
            arrows={false}
            useTransform={false}
            swipe={this.state.isSwipeAllowed}
            {...sliderSettings}>
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(introduction) => this.introduction = introduction}>
                <Introduction partners={this.props.partners} scrollNext={scrollNext}/>
              </Container> 
            </Slide>
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(connectWithMentor) => this.connectWithMentor = connectWithMentor}>
                <ConnectWithMentor scrollNext={scrollNext} onClickDownload={goToDownload}/>
              </Container> 
            </Slide>
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(training) => this.training = training }>
                <Training onClickDownload={goToDownload}/>
              </Container> 
            </Slide>
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(downloadApp) => this.downloadApp = downloadApp}>
                <DownloadApp organizationId={this.props.organizationId} countryCallingCode={this.props.countryCallingCode}/>
              </Container> 
            </Slide>
          </Slider>
        </Page>      
      </div>
    )
  }
}
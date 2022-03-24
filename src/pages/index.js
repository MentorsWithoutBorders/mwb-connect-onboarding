import React from 'react';
import { graphql } from 'gatsby';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { animateScroll as scroll } from 'react-scroll';
import { ModalProvider } from 'styled-react-modal';
import { Page, Slide, Container, StyledModal, FadingBackground } from 'index-styles.js';
import * as constants from 'utils/constants.js';
import { Steps } from 'components/steps/steps.js';
import { Introduction } from 'components/introduction/introduction.js';
import { Profile } from 'components/profile/profile.js';
import { Training } from 'components/training/training.js';
import { LessonRequest } from 'components/lesson-request/lesson-request.js';
import { DownloadApp } from 'components/download-app/download-app.js';
import { Testimonials } from 'components/introduction/testimonials.js';
import { Background } from 'index-styles';

export default class IndexPage extends React.Component {
  state = {
    activeStep: constants.MENTOR_INTRODUCTION,
    activeStepEnabled: constants.MENTOR_INTRODUCTION,
    isOpenModal: false,
    modalOpacity: 0,
    slidesHeights: []
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.updateSlidesHeights);
    this.updateSlidesHeights();    
  }

  updateSlidesHeights = () => {
    setTimeout(() => {
      this.setSlidesHeights();
    }, 500);    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSlidesHeights);
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
        if (this.state.activeStep > constants.MENTOR_INTRODUCTION) {
          setActiveStep(this.state.activeStep - 1);
        }        
      }
    };    

    const setActiveStep = (index) => {
      this.setState({activeStep: index});
    };

    const setActiveStepEnabled = (index) => {
      this.setState({activeStepEnabled: index});
    };    

    const scrollToTop = (index) => {
      setActiveStep(index);
      scroll.scrollToTop({
        duration: 400,
        delay: 0,
        smooth: true
      });
      setTimeout(() => {
        setActiveStepEnabled(index);
      }, 500);
    };

    const scrollNext = () => {
      setActiveStepOnScroll('left');
      this.slider.slickNext();
    };

    const goToIntroduction = () => {
      setActiveStep(constants.MENTOR_INTRODUCTION);
      this.slider.slickGoTo(constants.MENTOR_INTRODUCTION);
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
          <Steps activeStep={this.state.activeStep} goToIntroduction={goToIntroduction} goToProfile={goToProfile} goToTraining={goToTraining} goToLessonRequest={goToLessonRequest} goToDownload={goToDownload}/>
          <Slider
            ref={slider => (this.slider = slider)}
            arrows={false}
            {...sliderSettings}>
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(introduction) => { this.introduction = introduction }}>
                <Introduction partners={this.props.data.postgres.partners} scrollNext={scrollNext} toggleModal={toggleModal}/>
              </Container> 
            </Slide>
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(profile) => { this.profile = profile }}>
                <Profile scrollNext={scrollNext} onClickDownload={goToDownload}/>
              </Container> 
            </Slide>  
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(training) => { this.training = training }}>
                <Training scrollNext={scrollNext} onClickDownload={goToDownload}/>
              </Container> 
            </Slide>
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(lessonRequest) => { this.lessonRequest = lessonRequest }}>
                <LessonRequest onClickDownload={goToDownload}/>
              </Container> 
            </Slide>
            <Slide height={this.state.slidesHeights[this.state.activeStepEnabled]}>
              <Container ref={(downloadApp) => { this.downloadApp = downloadApp }}>
                <DownloadApp/>
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
          <Testimonials testimonials={this.props.data.postgres.testimonials} toggleModal={toggleModal}/>
        </StyledModal>        
      </ModalProvider>
    )
  }
}

export const query = graphql`
  {
    postgres {
      partners: allPartnersList {
        position
        name
        url
        logo
      }
      testimonials: allTestimonialsStudentsList {
        position
        name
        testimonial
        partnerNgo
        partnerNgoUrl
      }      
    }
  }
`;
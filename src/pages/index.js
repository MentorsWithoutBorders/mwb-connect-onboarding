import React from 'react';
import { graphql } from 'gatsby';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { ModalProvider } from "styled-react-modal";
import { Page, Slide, Container, StyledModal, FadingBackground } from './index-styles.js';
import * as constants from 'utils/constants.js';
import { Steps } from './steps/steps.js';
import { Introduction } from './introduction/introduction.js';
import { Profile } from './profile/profile.js';
import { Training } from './training/training.js';
import { LessonRequest } from './lesson-request/lesson-request.js';
import { DownloadApp } from './download-app/download-app.js';
import { Testimonials } from './introduction/testimonials.js';

export default class IndexPage extends React.Component {
  state = {
    activeStep: constants.MENTOR_INTRODUCTION,
    isOpenModal: false,
    modalOpacity: 0
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
        <Page>
          <title>MWB Connect Onboarding</title>
          <Steps activeStep={this.state.activeStep} goToIntroduction={goToIntroduction} goToProfile={goToProfile} goToTraining={goToTraining} goToLessonRequest={goToLessonRequest} goToDownload={goToDownload}/>
          <Slider ref={slider => (this.slider = slider)} arrows={false} {...sliderSettings}>
            <Slide>
              <Container>
                <Introduction partners={this.props.data.postgres.partners} scrollNext={scrollNext} toggleModal={toggleModal}/>
              </Container> 
            </Slide>            
            <Slide>
              <Container>
                <Profile scrollNext={scrollNext} onClickDownload={goToDownload}/>
              </Container> 
            </Slide>  
            <Slide>
              <Container>
                <Training scrollNext={scrollNext} onClickDownload={goToDownload}/>
              </Container> 
            </Slide>
            <Slide>
              <Container>
                <LessonRequest onClickDownload={goToDownload}/>
              </Container> 
            </Slide>
            <Slide>
              <Container>
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
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Page, Slide, Container } from './index-styles.js';
import { Profile } from './profile/profile.js';
import { Training } from './training/training.js';
import { LessonRequest } from './lesson-request/lesson-request.js';
import { DownloadApp } from './download-app/download-app.js';

export default class IndexPage extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const scrollNext = () => {
      this.slider.slickNext();
    };       

    const goToDownload = () => {
      this.slider.slickGoTo(3);
    };

    return (
      <Page>
        <title>MWB Connect Onboarding</title>
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
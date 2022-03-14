import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Page, Container, Embla, EmblaContainer, EmblaSlide } from './index-styles.js';
import { Profile } from './profile/profile.js';
import { Training } from './training/training.js';
import { LessonRequest } from './lesson-request/lesson-request.js';
import { DownloadApp } from './download-app/download-app.js';

const IndexPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    } 
  }, [emblaApi])
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index)
      }       
    },
    [emblaApi]
  );

  const goToDownload = () => {
    scrollTo(3);
  };

  return (
    <Page>
      <title>MWB Connect Onboarding</title>
      <Embla ref={emblaRef}>
        <EmblaContainer>
          <EmblaSlide>
            <Container>
              <Profile scrollNext={scrollNext} onClickDownload={goToDownload}></Profile>
            </Container> 
          </EmblaSlide>
          <EmblaSlide>
            <Container>
              <Training scrollNext={scrollNext} onClickDownload={goToDownload}></Training>
            </Container> 
          </EmblaSlide>
          <EmblaSlide>
            <Container>
              <LessonRequest onClickDownload={goToDownload}></LessonRequest>
            </Container> 
          </EmblaSlide>
          <EmblaSlide>
            <Container>
              <DownloadApp/>
            </Container> 
          </EmblaSlide>          
        </EmblaContainer>
      </Embla>      
    </Page>
  )
}

export default IndexPage

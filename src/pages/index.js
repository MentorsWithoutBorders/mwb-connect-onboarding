import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Page, Container, Embla, EmblaContainer, EmblaSlide } from './index-styles.js';
import { Description } from './description/description.js';

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

  return (
    <Page>
      <title>MWB Connect Onboarding</title>
      <Embla ref={emblaRef}>
        <EmblaContainer>
          <EmblaSlide>
            <Container>
              <Description scrollNext={scrollNext} onClickDownload={() => scrollTo(2)}></Description>
            </Container> 
          </EmblaSlide>
          <EmblaSlide>Slide 2</EmblaSlide>
          <EmblaSlide>Slide 3</EmblaSlide>
        </EmblaContainer>
      </Embla>      
    </Page>
  )
}

export default IndexPage

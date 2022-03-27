import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { isMobile } from 'react-device-detect';
import { CloseContainer, Close, Title , TestimonialsContainer, TestimonialContainer, PhotoContainer, Photo, DescriptionContainer, DescriptionTextContainer, DescriptionText, Student, NameContainer, Name, Dash, Organization, OrganizationLink } from './testimonials-styles.js';
import CloseImg from 'images/close-icon.png';

export const Testimonials = ({testimonials, toggleModal}) => {
  const [dimensions, setDimensions] = React.useState({ 
    height: '57vh'
  })

  React.useEffect(() => {
    function handleResize() {
      if (isMobile) {
        if (window.innerHeight > window.innerWidth) {
          setDimensions({
            height: '40vh'
          })
        } else {
          setDimensions({
            height: '54vh'
          });        
        }        
      }
    }
    window.addEventListener('resize', handleResize);
  })

  testimonials.sort((a,b) => {
    const reverseCompare = (a.position < b.position) ? -1 : 0;
    return a.position > b.position ? 1 : reverseCompare;
  }); 
  return (
    <div>
      <CloseContainer>
        <Close src={CloseImg} onClick={toggleModal}/>
      </CloseContainer>
      <Title>
        Testimonials from MWB students
      </Title>
      <TestimonialsContainer>
        <Scrollbars
          thumbMinSize={100}
          autoHeight
          autoHeightMin={dimensions.height}
        >
          {testimonials.map(testimonial => {
            const photo = 'https://mentorswithoutborders.net/images/testimonials/students/' + testimonial.name.replaceAll(' ', '-') + '.jpg';
            return <TestimonialContainer key={testimonial.position}>
              <PhotoContainer>
                <Photo src={photo}/>
              </PhotoContainer>			    		
              <DescriptionContainer>
                <DescriptionTextContainer>
                  <DescriptionText>
                    {testimonial.testimonial}
                  </DescriptionText>
                </DescriptionTextContainer>
              </DescriptionContainer>
              <Student>
                <NameContainer>
                  <Name>
                    {testimonial.name}
                  </Name>
                </NameContainer>
                <Dash> - </Dash>
                <Organization>
                  <OrganizationLink href={testimonial.partnerNgoUrl} target="_blank">{testimonial.partnerNgo}</OrganizationLink>
                </Organization>
              </Student>
            </TestimonialContainer>
          })}
        </Scrollbars>
      </TestimonialsContainer>     
    </div>
  )
}
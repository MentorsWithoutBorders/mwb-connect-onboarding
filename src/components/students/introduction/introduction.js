import React from 'react';
import { ActionButton } from 'components/ActionButton/action-button.js';
import { Text, ButtonsContainer } from './introduction-styles.js';

export const Introduction = ({scrollNext}) => {
  return (
    <div>
      <Text>
        Thank you for your interest in participating in our mentoring program.
        <p>We can connect you with mentors who are specialized in 21<sup>st</sup> century fields such as programming, product management, customer support, design, human resources, etc. and you will do lessons once a week on Zoom or Google Meet, the duration of each lesson being 1 / 1.5 hours.</p>
        <p>Apart from that, you will also learn how to set very clear professional goals and how to pursue these goals with a lot of patience, joy, and efficiency.</p>
      </Text>
      <ButtonsContainer>
        <ActionButton text="Find out how to connect with a mentor >>" onClick={scrollNext}/>
      </ButtonsContainer>
    </div>
  )
}
import * as React from 'react'
import { TextContainer, Number, Text } from './step-text-styles.js';

export const StepText = ({number, text}) => {
  return (
    <TextContainer>
      <Number>{number}</Number>
      <Text>{text}</Text>
    </TextContainer>
  )
}
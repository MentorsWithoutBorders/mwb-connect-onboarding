import * as React from 'react'
import { TextContainer, Number, Text } from './step-text-styles.js';

export const StepText = ({number, text, isActive}) => {
  return (
    <TextContainer>
      <Number>{number}</Number>
      <Text active={isActive}>{text}</Text>
    </TextContainer>
  )
}
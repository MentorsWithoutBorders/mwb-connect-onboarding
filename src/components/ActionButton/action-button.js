import * as React from 'react'
import { StyledActionButton } from './action-button-styles.js';

export const ActionButton = ({ text, onClick }) => {
  return (
    <StyledActionButton onClick={onClick}>{text}</StyledActionButton>
  )
}
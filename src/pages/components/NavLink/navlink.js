import * as React from 'react'
import { StyledNavLink } from './navlink-styles.js';

export const NavLink = ({ text, onClick }) => {
  return (
    <StyledNavLink onClick={onClick}>{text}</StyledNavLink>
  )
}
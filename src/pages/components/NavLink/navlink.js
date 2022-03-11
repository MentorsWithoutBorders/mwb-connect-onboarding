import * as React from 'react'
import { StyledNavLink } from './navlink-styles.js';

export const NavLink = ({ text }) => {
  return (
    <StyledNavLink>{text}</StyledNavLink>
  )
}
import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledNavLink = styled(Link)`
  color: #008aca;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
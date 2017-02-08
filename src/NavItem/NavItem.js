import React from 'react';
import styled from 'styled-components';


const StyledNavItem = styled.span`
  height: 3em;
  font-size: 2em;
  color: white;
  padding: 0.3em;
`

export default function NavItem(props) {
  console.log(props);
  return (
    <StyledNavItem>
      {props.name}
    </StyledNavItem>
  )
}

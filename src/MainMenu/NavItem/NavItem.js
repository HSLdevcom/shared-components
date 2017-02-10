import React, { PropTypes } from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.span`
  height: 3em;
  font-size: 1em;
  color: white;
  padding: 0.3em;
`;

export default function NavItem(props) {
  return (
    <StyledNavItem>
      {props.name}
    </StyledNavItem>
  );
}
NavItem.propTypes = {
  name: PropTypes.string.isRequired
};

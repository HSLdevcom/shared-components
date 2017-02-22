import React, { PropTypes } from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.background};
  height: 60px;
  @media(max-width: ${props => props.theme.md}) {
    display: none
  }
`;
function AppBarLarge(props) {
  return (<StyledDiv>{props.children}</StyledDiv>);
}

AppBarLarge.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppBarLarge;

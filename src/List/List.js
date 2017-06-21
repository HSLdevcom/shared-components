import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';

const Ul = styled.ul``;
const H3 = styled.h3``;

const StyledDiv = Div.extend`
  ${H3} {

  }
  ${Ul} {
    padding: 0;
    list-style: none;
    columns: 2;
    li::before {
      padding-right: 0.75rem;
      content: "○";
      color: ${props => props.theme.listItemMarker};
    }
  }
`;

const List = ({
  header,
  children,
  className
}) => (
  <StyledDiv className={className}>
    <H3>{ header }</H3>
    <Ul>
      { children }
    </Ul>
  </StyledDiv>
)
;

List.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default styled(List)``;

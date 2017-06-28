import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';

const Ul = styled.ul``;
const Header = Div.extend``;

const StyledDiv = Div.extend`
  ${Header} {
    margin-bottom: 1.25rem;
    ${props => (
      props.theme.Media &&
      props.theme.Media.small`
      margin-bottom: 0;
    `)}
  }
  ${Ul} {
    padding: 0;
    margin: 0;
    list-style: none;
    columns: 2;
    ${props => (
      props.theme.Media &&
      props.theme.Media.large`
      columns: 1;
    `)}
    li::before {
      padding-right: 0.75rem;
      content: "○";
      color: ${props => props.theme.listItemMarker};
    }
    ${props => (
      props.theme.Media &&
      props.theme.Media.small`
      li::before {
        content: "";
        padding-right: 0;
      }
    `)}

  }
`;

const List = ({
  header,
  children,
  className
}) => (
  <StyledDiv className={className}>
    <Header>{ header }</Header>
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

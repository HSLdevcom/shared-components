import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import Span from '../Span';

const StyledDiv = Div.extend`
  background: #EEF1F3;
  border-right: solid 1px #CFCFCF;
  border-bottom: solid 1px #CFCFCF;
  &:first-child {
    ${props => props.rounded && 'border-radius: 6px 0 0 0;'}
  }
  &:last-child {
    border-right: none;
    ${props => props.rounded && 'border-radius: 0 6px 0 0;'}
  }
  ${props => props.active && `
    border-bottom: 1px solid transparent;
    background: #FFFFFF;
    `
  }
  border-top: none;
  flex: 1;
  > ${Span} {
    color: #017AC9;
    font-size: 1.1rem;
    text-transform: uppercase;
    margin: 0 2rem 1rem 2rem;
    padding-top: 0.75rem;
    display: flex;
    justify-content: center;
    border-top: 4px solid transparent;
    ${props => props.active && `
      border-top: solid 4px #017AC9;
      color: #000000;
    `}
    ${props => props.disabled && 'color: #B7B7B7;'}
  }
`;

const Tabs = ({
  header,
  children, // eslint-disable-line no-unused-vars
  className,
  active,
  action,
  disabled,
  rounded
}) => (
  <StyledDiv
    className={className}
    onClick={action}
    active={active}
    disabled={disabled}
    rounded={rounded}
  >
    <Span>{ header }</Span>
  </StyledDiv>
)
;

Tabs.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool,
  action: PropTypes.func,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool
};

export default styled(Tabs)``;

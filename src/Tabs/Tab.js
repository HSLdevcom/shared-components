import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ButtonNoStyle } from '../Button/Button';
import Span from '../Span';

const StyledBtn = ButtonNoStyle.extend`
  cursor: pointer;
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
    > * {
      display: flex;
      align-items: center;
      svg {
        padding-right: 1rem;
        fill: currentColor;
      }
    }
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

StyledBtn.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool
};

const Tab = ({
  header,
  className,
  active,
  onClick,
  disabled,
  rounded
}) => (
  <StyledBtn
    className={className}
    onClick={onClick}
    active={active}
    disabled={disabled}
    rounded={rounded}
  >
    <Span>{ header }</Span>
  </StyledBtn>
)
;

Tab.propTypes = {
  header: PropTypes.node.isRequired,
  // Validate the presence of children. Children is used in Tabs component
  children: PropTypes.node.isRequired, // eslint-disable-line react/no-unused-prop-types
  className: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool
};

export default styled(Tab)``;

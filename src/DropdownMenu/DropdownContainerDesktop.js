import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import { Flex } from '../Wrapper';
import Mask from './Mask';
import { Width } from '../Menu/Menu';
// we want to use same width for menu and last-child of dropdownmenu,
// so that their icons align

const StyledDiv = Div.extend`
  border-top: 1px solid black;
  position: absolute;
  left: 0;
  right: 0;
  top: ${props => props.top}px;
  white-space: normal;
`;

const StyledFlex = Flex.extend`
  font-size: 1.1rem;
  background: ${props => props.theme.background};
  justify-content: space-between;
  padding: 2.5rem 1rem 2.5rem 10rem;
  ${props => (
  props.theme.Media &&
  props.theme.Media.large`
  padding: 2.5rem 1rem 2.5rem 7rem;
  font-size: 1rem;
`)};
${props => (
  props.theme.Media &&
  props.theme.Media.medium`
  padding: 2.5rem 1rem 2.5rem 4rem;
`)};
  align-items: flex-start;
  > * {
    max-width: ${props => 100 / (Number(props.childrenCount) || 1)}%;
    &:last-child {
      width: ${Width.large};
    }
    svg {
      height: 2.5rem;
    }
    ${props => (
      props.theme.Media &&
      props.theme.Media.large`
        svg {
          height: 2.25rem;
        }
      `
    )}
    ${props => (
      props.theme.Media &&
      props.theme.Media.medium`
        svg {
          height: 1.75rem;
        }
      `
    )}
  }
`;

const DropdownContainer = ({
  top,
  className,
  children }) => (
    <StyledDiv className={className} top={top}>
      <StyledFlex childrenCount={React.Children.count(children)}>
        { children }
      </StyledFlex>
      <Mask />
    </StyledDiv>
    );

DropdownContainer.propTypes = {
  top: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

export default styled(DropdownContainer)``;

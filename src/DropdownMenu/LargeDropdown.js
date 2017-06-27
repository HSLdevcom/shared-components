import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import { Flex } from '../Wrapper';
import Mask from './Mask';
import { Width } from '../Menu/Menu';

const StyledDiv = Div.extend`
  border-top: 1px solid black;
  position: absolute;
  left: 0;
  right: 0;
  top: ${props => props.top}px;
  white-space: normal;
`;

const StyledFlex = Flex.extend`
  background: ${props => props.theme.background};
  justify-content: space-between;
  padding: 2.5rem 1rem 2.5rem 10rem;
  align-items: flex-start;
  > * {
    max-width: ${props => 100 / (Number(props.childrenCount) || 1)}%;
    &:last-child {
      width: ${Width.large};
      ${props => (
        props.theme.Media &&
        props.theme.Media.large`
        width: ${Width.medium};
      `)};
      ${props => (
        props.theme.Media &&
        props.theme.Media.medium`
        width: ${Width.small};
      `)};
    }
  }
`;

const Dropdown = ({
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

Dropdown.propTypes = {
  top: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

export default styled(Dropdown)``;

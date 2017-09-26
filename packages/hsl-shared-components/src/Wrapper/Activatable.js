import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import View from '../View';
import { size } from '../utils';

export const activatableLineHeight = size(4);

export const activatablePointerHeight = size(9.6);

const Spacer = View.extend`
  height: ${activatablePointerHeight};
`;

const StyledView = styled(({ active, small, ...rest }) => (<View {...rest} />))`
  flex-direction: column;
  justify-content: space-between;
  border-style: solid;
  ${props => (
    !props.small &&
    `
      border-top-width: ${activatableLineHeight};
      border-bottom-width: ${activatableLineHeight};
      border-top-color: transparent;
      border-bottom-color: ${props.active ? props.theme.colors.primary.hslWhite : 'transparent'};
    `
  )}
`;

const Pointer = styled(({ active, ...rest }) => (<View {...rest} />))`
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  border-left-width: ${activatablePointerHeight};
  border-right-width: ${activatablePointerHeight};
  border-bottom-width: ${activatablePointerHeight};
  border-bottom-color: ${props => (props.active ? props.theme.colors.primary.hslWhite : 'transparent')};
`;

const Activatable = ({
  active,
  small,
  children,
  ...rest
  }) => (
    <StyledView {...rest} active={active} small={small}>
      {small && <Spacer />}
      {children}
      {small && <Pointer active={active} />}
    </StyledView>
);

Activatable.propTypes = {
  active: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node
};


export default styled(Activatable)``;

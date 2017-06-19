import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Div from '../Div';

const StyledDiv = Div.extend`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => (
    !props.small &&
    `border-bottom: 4px solid ${props.active ? '' : 'transparent'};`
  )}
`;

const Pointer = Div.extend`
  width: 0;
  height: 0;
  border-left: 0.6rem solid transparent;
  border-right: 0.6rem solid transparent;
  border-bottom: 0.6rem solid ${props => !props.active && 'transparent'};
`;

const Activatable = ({ active,
  small,
  className,
  children }) => (
    <StyledDiv className={className} active={active} small={small}>
      {children}
      {small && <Pointer active={active} />}
    </StyledDiv>
);

Activatable.defaultProps = {
  size: 'Large'
};

Activatable.propTypes = {
  active: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};


export default styled(Activatable)`
`;

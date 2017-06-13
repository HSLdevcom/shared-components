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
    props.size === 'Large' &&
    `border-bottom: 4px solid ${props.active ? '' : 'transparent'};`
  )}
`;

const Pointer = Div.extend`
  width: 0;
  height: 0;
  border-left: 0.6rem solid transparent;
  border-right: 0.6rem solid transparent;
  border-bottom: 1rem solid;
`;

const Activatable = ({ active,
  size,
  className,
  children },
  context) => (
    <StyledDiv className={className} active={active} size={context.size || size}>
      {children}
      {(context.size || size) === 'Small' && active && <Pointer />}
    </StyledDiv>
);

Activatable.defaultProps = {
  size: 'Large'
};

Activatable.contextTypes = {
  size: PropTypes.oneOf(['Small', 'Large'])
};

Activatable.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.oneOf(['Small', 'Large']),
  className: PropTypes.string,
  children: PropTypes.node
};


export default styled(Activatable)`
`;

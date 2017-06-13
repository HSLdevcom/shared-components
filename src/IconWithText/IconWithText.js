import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Span from '../Span';
import Div from '../Div';

const IconWrapper = Span.extend`
  vertical-align: middle;
  display: inline-block;
  margin: ${props => (props.textPosition === 'Right' ? '0 0.75rem 0 0' : '0 0 0.75rem 0')};
  svg {
    fill: currentColor;
  }
`;

const StyledButton = Div.extend`
  display: flex;
  flex-direction: ${props => (props.textPosition === 'Right' ? 'row' : 'column')};
  align-items: center;
  text-align: center;
`;
const IconWithText = ({ icon,
  text,
  textPosition,
  className }, context) => (
    <StyledButton className={className} textPosition={context.textPosition || textPosition}>
      <IconWrapper
        className="icon"
        aria-hidden="true"
        textPosition={context.textPosition || textPosition}
      >
        { icon }
      </IconWrapper>
      <Span className="text">{text}</Span>
    </StyledButton>
);

IconWithText.defaultProps = {
  textPosition: 'Bottom'
};

IconWithText.contextTypes = {
  textPosition: PropTypes.string
};

IconWithText.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  textPosition: PropTypes.oneOf(['Right', 'Bottom']),
  className: PropTypes.string
};

export default styled(IconWithText)`
`;

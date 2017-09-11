import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Span from '../Span';
import Div from '../Div';

/*
Todo:
- remove this and start using ButtonWithText
*/
export const IconWrapper = Span.extend`
  vertical-align: middle;
  display: inline-block;
  margin: ${props => (props.textPosition === 'Right' ? '0 0.75rem 0 0' : '0 0 0.75rem 0')};
  svg {
    fill: currentColor;
  }
`;

export const TextWrapper = Span.extend``;

const StyledButton = Div.extend`
  display: flex;
  flex-direction: ${props => (props.textPosition === 'Right' ? 'row' : 'column')};
  align-items: center;
  text-align: center;
`;
const IconWithText = ({ icon,
  text,
  textPosition,
  className }) => (
    <StyledButton className={className} textPosition={textPosition}>
      <IconWrapper
        aria-hidden="true"
        textPosition={textPosition}
      >
        { icon }
      </IconWrapper>
      <TextWrapper>{text}</TextWrapper>
    </StyledButton>
);

IconWithText.defaultProps = {
  textPosition: 'Bottom'
};

IconWithText.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  textPosition: PropTypes.oneOf(['Right', 'Bottom']),
  className: PropTypes.string
};

export default styled(IconWithText)`
`;

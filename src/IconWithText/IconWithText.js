import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Span from '../Span/Span';

const IconWrapper = Span.extend`
  vertical-align: middle;
  display: inline-block;
  margin: ${props => (props.textPosition === 'Right' ? '0 0.75rem 0 0' : '0 0 0.75rem 0')};
`;


function getDisplayValue(textPosition) {
  const displayMap = {
    Right: 'inline',
    Bottom: 'block'
  };
  return displayMap[textPosition];
}


const Text = Span.extend`
  ${props => props.textPosition && `display: ${getDisplayValue(props.textPosition)};`};
`;

const IconWithText = ({ icon,
  height,
  width,
  text,
  fill,
  textPosition,
  className }) => (
    <Span className={className}>
      <IconWrapper className="icon" aria-hidden="true" textPosition={textPosition}>
        {React.cloneElement(icon, { fill, height, width })}
      </IconWrapper>
      <Text className="text" textPosition={textPosition}>{text}</Text>
    </Span>
);

IconWithText.propTypes = {
  icon: PropTypes.element.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  text: PropTypes.string.isRequired,
  fill: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  textPosition: PropTypes.oneOf(['Right', 'Bottom']),
  className: PropTypes.string
};

export default styled(IconWithText)``;

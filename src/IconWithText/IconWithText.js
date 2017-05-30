import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

const displayMap = {
  Right: 'inline',
  Bottom: 'block'
};

const StyledSpan = styled.span`
  background: ${props => props.background};
  color: ${props => props.color};
  display: inline-block;
  text-align: center;
`;

const IconWrapper = styled.span`
  vertical-align: middle;
  display: inline-block;
  margin: ${props => (props.textPosition === 'Right' ? '0 1em 0 0' : '0 0 1.25em 0')};
`;

const IconWithText = ({ icon,
  height,
  text,
  color,
  fill,
  background,
  textPosition }) => (
    <StyledSpan color={color} background={background}>
      <IconWrapper aria-hidden="true" textPosition={textPosition}>
        {React.cloneElement(icon, { fill, height })}
      </IconWrapper>
      <Text display={displayMap[textPosition]}>{text}</Text>
    </StyledSpan>
);

IconWithText.propTypes = {
  icon: PropTypes.element.isRequired,
  height: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  fill: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  background: PropTypes.string,
  textPosition: PropTypes.oneOf(['Right', 'Bottom'])
};

export default IconWithText;

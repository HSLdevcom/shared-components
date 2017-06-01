import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Span from '../Span/Span';


const displayMap = {
  Right: 'inline',
  Bottom: 'block'
};


const IconWrapper = Span.extend`
  vertical-align: middle;
  display: inline-block;
  margin: ${props => (props.textPosition === 'Right' ? '0 0.75rem 0 0' : '0 0 0.75rem 0')};
`;

const IconWithText = ({ icon,
  height,
  width,
  text,
  fill,
  textPosition }) => (
    <Span style={{ display: 'inline-block', textAlign: 'center' }}>
      <IconWrapper aria-hidden="true" textPosition={textPosition}>
        {React.cloneElement(icon, { fill, height, width })}
      </IconWrapper>
      <Span style={{ display: displayMap[textPosition] }}>{text}</Span>
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
};

export default styled(IconWithText)``;

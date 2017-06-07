import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Span from '../Span/Span';

const IconWrapper = Span.extend`
  vertical-align: middle;
  display: inline-block;
  margin: ${props => (props.textPosition === 'Right' ? '0 0.75rem 0 0' : '0 0 0.75rem 0')};
  svg {
    fill: currentColor;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: ${props => (props.textPosition === 'Right' ? 'row' : 'column')};
  align-items: center;
`;
const IconWithText = ({ icon,
  text,
  textPosition,
  className }) => (
    <Div className={className} textPosition={textPosition}>
      <IconWrapper className="icon" aria-hidden="true" textPosition={textPosition}>
        { icon }
      </IconWrapper>
      <Span className="text" textPosition={textPosition}>{text}</Span>
    </Div>
);

IconWithText.defaultProps = {
  textPosition: 'Bottom'
};


IconWithText.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  textPosition: PropTypes.oneOf(['Right', 'Bottom']),
  className: PropTypes.string
};

export default styled(IconWithText)``;

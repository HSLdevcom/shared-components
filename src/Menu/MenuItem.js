import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import { Activatable } from '../Wrapper';
import IconWithText from '../IconWithText/IconWithText';

const StyledDiv = Div.extend`
  display: flex;
  >.link {
    display: flex;
  }
  ${IconWithText} {
    .text {
      ${props => (
        props.small && 'display: none;'
      )}
    }
  }
`;

const MenuItem = ({
  link,
  icon,
  text,
  textPosition,
  active,
  small,
  className
}) => (
  <StyledDiv className={className} small={small}>
    <link.type {...link.props} className="link">
      <Activatable active={active} small={small} >
        <IconWithText icon={icon} text={text} textPosition={textPosition} />
      </Activatable>
    </link.type>
  </StyledDiv>
)
;

MenuItem.propTypes = {
  link: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  textPosition: PropTypes.oneOf(['Right', 'Bottom']),
  active: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string
};

export default styled(MenuItem)``;

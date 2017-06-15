import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import { Activatable } from '../Wrapper';
import IconWithText from '../IconWithText/IconWithText';

const StyledDiv = Div.extend`
  ${IconWithText} {
    .icon {
      ${props => (
        props.small && 'display: none;'
      )}
    }
  }
`;

const NavItem = ({
  link,
  icon,
  text,
  textPosition,
  active,
  small,
  className
}) => (
  <StyledDiv className={className} small={small}>
    {React.cloneElement(
      link,
      { className: 'link' },
      (<Activatable active={active}>
        <IconWithText icon={icon} text={text} textPosition={textPosition} />
      </Activatable>)
    )}
  </StyledDiv>
)
;

NavItem.propTypes = {
  link: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  textPosition: PropTypes.oneOf(['Right', 'Bottom']),
  active: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string
};

export default styled(NavItem)``;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import View from '../View';
import { LabelText } from '../Typography';
import { Activatable } from '../Wrapper';
import { size } from '../utils';

const StyledLabelText = styled(({ small, ...rest }) => (
  <LabelText {...rest} />
))`
  ${props => !props.small && `margin-top: ${size(16)};`}
  color: ${props => props.theme.colors.primary.hslWhite};
`;

const NavItem = ({
  link,
  icon,
  text,
  active,
  small,
  ...rest
}) => (
  <View {...rest}>
    {React.cloneElement(
      link,
      { },
      (<Activatable active={active}>
        {!small && icon}
        <StyledLabelText small={small}>{text}</StyledLabelText>
      </Activatable>)
    )}
  </View>
)
;

NavItem.propTypes = {
  link: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  active: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string
};

export default styled(NavItem)``;

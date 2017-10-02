import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import View from '../View';
import { LabelText } from '../Typography';
import { Activatable } from '../Wrapper';
import { size, Responsive } from '../utils';

const StyledLabelText = styled(({ small, ...rest }) => (
  <LabelText {...rest} />
))`
  ${props => !props.small && `margin-top: ${size(16)};`}
  color: ${props => props.theme.colors.primary.hslWhite};
`;

const StyledView = View.extend`
  flex-direction: row;
  align-items: stretch;
`;

const Icon = ({ children }) => (
  <Responsive
    small={React.cloneElement(children, { height: '2rem' })}
    large={React.cloneElement(children, { height: '2.25rem' })}
    xlarge={React.cloneElement(children, { height: '2.5rem' })}
  />
);

Icon.propTypes = {
  children: PropTypes.node.isRequired
};

const NavItem = ({
  link,
  icon,
  text,
  active,
  small,
  ...rest
}) => (
  <StyledView {...rest}>
    {React.cloneElement(
      link,
      { },
      (<Activatable active={active}>
        {!small && <Icon>{icon}</Icon>}
        <StyledLabelText small={small}>{text}</StyledLabelText>
      </Activatable>)
    )}
  </StyledView>
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

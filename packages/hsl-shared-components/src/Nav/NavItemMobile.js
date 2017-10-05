import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import View from '../View';
import { LabelText } from '../Typography';
import { Activatable } from '../Wrapper';
import { size } from '../utils';

const StyledLabelText = LabelText.extend`
  margin-left: ${size(8)};
  color: ${props => props.theme.colors.background.hslWhite}
  font-size: ${size(20)};
`;

const StyledView = View.extend`
  align-items: stretch;
  flex-direction: row;
  justify-content: center;
`;

const Wrap = View.extend`
  flex-direction: row;
`;

const NavItem = ({
  link,
  icon,
  text,
  active,
  ...rest
}) => (
  <StyledView {...rest}>
    {React.cloneElement(
      link,
      {},
      (<Activatable active={active}>
        <Wrap>
          {React.cloneElement(icon, { height: '2rem' })}
          <StyledLabelText>{text}</StyledLabelText>
        </Wrap>
      </Activatable>)
    )}
  </StyledView>
)
;

NavItem.propTypes = {
  link: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string
};

export default styled(NavItem)``;

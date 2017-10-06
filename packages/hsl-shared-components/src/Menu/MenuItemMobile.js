import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import View from '../View';
import { LabelText } from '../Typography';
import { Activatable } from '../Wrapper';
import { size } from '../utils';

const StyledLabelText = LabelText.extend`
  margin-top: ${size(16)};
  color: ${props => props.theme.colors.primary.hslWhite};
  font-size: ${size(18)};
`;

const StyledView = View.extend`
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  margin-horizontal: auto;
`;

const MenuItem = ({
  link,
  icon,
  text,
  active,
  ...rest
}) => (
  <StyledView {...rest}>
    {React.cloneElement(
      link,
      { },
      (<Activatable active={active}>
        {React.cloneElement(icon, { height: '1.5rem' })}
        <StyledLabelText>{text}</StyledLabelText>
      </Activatable>)
    )}
  </StyledView>
)
;

MenuItem.propTypes = {
  link: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  active: PropTypes.bool
};

export default styled(MenuItem)``;

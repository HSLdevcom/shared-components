import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import View from '../View';
import { LabelText } from '../Typography';

import { size } from '../utils';

import { Activatable } from '../Wrapper';

const StyledLabelText = LabelText.extend`
  margin-left: ${size(8)};
  color: ${props => props.theme.colors.background.hslWhite}
`;

const StyledView = View.extend`
  align-items: stretch;
  flex-direction: row;
  justify-content: center;
`;

const Wrap = View.extend`
  flex-direction: row;
`;

const MenuItem = ({
  link,
  icon,
  text,
  active,
  small,
  ...rest
}) => (
  <StyledView small={small} {...rest}>
    {React.cloneElement(
      link,
      {},
      (<Activatable active={active} small={small} >
        <Wrap>
          {icon}
          { !small && <StyledLabelText>{text}</StyledLabelText> }
        </Wrap>
      </Activatable>)
    )}
  </StyledView>
)
;

MenuItem.propTypes = {
  link: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string
};

export default styled(MenuItem)``;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import View from '../View';
import { LabelText } from '../Typography';

import { Activatable } from '../Wrapper';

const StyledLabelText = LabelText.extend`
  color: ${props => props.theme.colors.background.hslWhite}
`;

const MenuItem = ({
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
      {},
      (<Activatable active={active} small={small} >
        <View>
          {icon}
          { !small && <StyledLabelText>{text}</StyledLabelText> }
        </View>
      </Activatable>)
    )}
  </View>
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

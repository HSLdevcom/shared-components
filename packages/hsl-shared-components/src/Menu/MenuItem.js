import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import View from '../View';
import { LabelText } from '../Typography';

import { size, Responsive } from '../utils';

import { Activatable } from '../Wrapper';

const StyledLabelText = LabelText.extend`
  margin-left: ${size(8)};
  color: ${props => props.theme.colors.background.hslWhite}
  font-size: ${props => props.fontSize};
`;

const ResponsiveLabelText = ({ ...props }) => (
  <Responsive
    small={<StyledLabelText {...props} fontSize={size(18)} />}
    medium={<StyledLabelText {...props} fontSize={size(16)} />}
  />
);

const StyledView = View.extend`
  align-items: stretch;
  flex-direction: row;
  justify-content: center;
`;

const Wrap = View.extend`
  flex-direction: row;
`;

const Icon = ({ children }) => (
  <Responsive
    small={React.cloneElement(children, { height: '1.5rem' })}
    large={React.cloneElement(children, { height: '1.75rem' })}
    xlarge={React.cloneElement(children, { height: '2rem' })}
  />
);

Icon.propTypes = {
  children: PropTypes.node.isRequired
};

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
          <Icon>{icon}</Icon>
          { !small && <ResponsiveLabelText>{text}</ResponsiveLabelText> }
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

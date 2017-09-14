import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { lighten } from 'polished';

import View from '../View';
import { size } from '../utils';
import { H2 } from '../Typography';

const StyledH2 = H2.extend`
  margin-bottom: ${size(40)};
  text-align: center;
`;

const MobileContainer = styled(({ border, title, children, ...rest }) => (
  <View {...rest}>
    {!!title && <StyledH2>{title}</StyledH2>}
    {children}
  </View>
))`
  padding-vertical: ${size(50)};
  border-style: solid;
  border-color: ${props => lighten(0.15, props.theme.default)};
  border-top-width: ${props => (props.border ? '2px' : '0px')};
`;


MobileContainer.propTypes = {
  border: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default MobileContainer;


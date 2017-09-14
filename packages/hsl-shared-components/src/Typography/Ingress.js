import React from 'react';
import styled from 'styled-components/primitives';

import Text from './Text';
import { size } from '../utils';

const Ingress = styled(({ ...props }) => (
  <Text {...props} />
))`
  font-weight: 300;
  font-size: ${size(20)};
  line-height: ${25};
  ${props => props.theme.fontFamilyNarrow && `font-family: ${props.theme.fontFamilyNarrow};`}
`;

export default Ingress;

import React from 'react';
import styled from 'styled-components/primitives';

import Text from './Text';
import { size, relativeLineHeight } from '../utils';

const Ingress = styled(({ ...props }) => (
  <Text {...props} />
))`
  font-weight: 300;
  font-size: ${size(18)};
  line-height: ${relativeLineHeight(18, 1.25)};
  font-family: ${props => props.theme.font.familyNarrow};
`;

Ingress.displayName = 'Ingress';

export default Ingress;

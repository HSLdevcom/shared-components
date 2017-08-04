import React from 'react';
import styled from 'styled-components/primitives';
import PropTypes from 'prop-types';
import Button from '../Button';
import View from '../View';
import { size } from '../utils';

const StyledView = View.extend`
  height: ${size(36)};
  width: ${size(36)};
`;

const RoundButton = styled(({ children, ...props }) => (
  <Button
    rounded
    {...props}
  >
    <StyledView>
      {
        children
      }
    </StyledView>
  </Button>
))`
  height: ${size(80)};
  width: ${size(80)};
  border-color: ${props => props.theme.primary};
`;

RoundButton.propTypes = {
  children: PropTypes.element
};

export default RoundButton;

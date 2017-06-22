import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import Mask from './Mask';

const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  ${Div} {
    background: ${props => props.theme.background};
    display: flex;
    justify-content: space-around;
    padding-top: 2.5rem
    align-items: flex-start;
  }
`;

const Dropdown = ({
  className,
  children }) => (
    <StyledDiv className={className}>
      <Div>
        { children }
      </Div>
      <Mask />
    </StyledDiv>
    );

Dropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default styled(Dropdown)``;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import Button from '../Button/Button';

const Ul = styled.ul``;

const StyledDiv = Div.extend`
  ${Ul} {
    padding: 0;
    list-style: none;
  }
`;

const NewsFeed = ({
  children,
  className
}) => (
  <StyledDiv className={className}>
    <Ul>
      { children }
    </Ul>
    <Div>
      <Button>Näytä lísää</Button>
    </Div>
  </StyledDiv>
)
;

NewsFeed.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default styled(NewsFeed)``;

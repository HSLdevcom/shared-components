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
  more,
  children,
  className
}) => (
  <StyledDiv className={className}>
    <Ul>
      { children }
    </Ul>
    <Div>
      <Button>{more}</Button>
    </Div>
  </StyledDiv>
)
;

NewsFeed.propTypes = {
  more: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default styled(NewsFeed)``;

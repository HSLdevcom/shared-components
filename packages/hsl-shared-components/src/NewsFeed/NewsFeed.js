import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from '../Div';
import Button from '../Button';

const Ul = styled.ul``;

const StyledDiv = Div.extend`
  ${Ul} {
    padding: 0;
    list-style: none;
  }
  ${Button}.show-more {
    width: 15rem;
    height: 2.5rem;
    font-size: 1rem;
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
      <Button rounded className="show-more" onClick={more.action}>{more.text}</Button>
    </Div>
  </StyledDiv>
)
;

NewsFeed.propTypes = {
  more: PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  }),
  children: PropTypes.node,
  className: PropTypes.string
};

export default styled(NewsFeed)``;

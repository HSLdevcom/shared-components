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
  children,
}) => (
  <StyledDiv>
    <Ul>
      { children }
    </Ul>
  </StyledDiv>
)
;

NewsFeed.propTypes = {
  children: PropTypes.node,
};

export default styled(NewsFeed)``;

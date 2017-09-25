import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import View from '../View';

const StyledView = View.extend`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
`;

const List = View.extend`
  flex-direction: column;
  border-style: solid;
  border-color: ${props => props.theme.colors.primary.hslGreyLight};
  border-width: 1px;
  border-bottom-width: 0;
`;


const NewsFeed = ({
  children,
  className
}) => (
  <StyledView className={className}>
    <List>
      { children }
    </List>
  </StyledView>
)
;

NewsFeed.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default styled(NewsFeed)``;

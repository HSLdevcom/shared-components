import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import View from '../View';
import Button from '../Button';

const StyledView = View.extend`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
`;

const ButtonWrapper = View.extend`
  padding: 25px 50px 25px 50px;
  background-color: #eef1f3;
  justify-content: center;
  align-items: center;
`;

const List = View.extend`
  flex-direction: column;
  border-style: solid;
  border-color: ${props => props.theme.colors.misc.greyLight};
  border-width: 1px;
  border-bottom-width: 0;
`;


const NewsFeed = ({
  more,
  children,
  className
}) => (
  <StyledView className={className}>
    <List>
      { children }
    </List>
    <ButtonWrapper>
      <Button rounded onPress={more.action}>{more.text}</Button>
    </ButtonWrapper>
  </StyledView>
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

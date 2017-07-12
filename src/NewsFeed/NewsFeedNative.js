import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import View from '../View';
import { ButtonNative } from '../Button';

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
      <ButtonNative rounded onPress={more.action}>{more.text}</ButtonNative>
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

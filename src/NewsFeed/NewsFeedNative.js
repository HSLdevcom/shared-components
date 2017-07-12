import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import View from '../View';
import { ButtonNative } from '../Button';

const StyledButton = ButtonNative.extend`

`;

const List = View.extend`
  padding: 0;
`;


const NewsFeed = ({
  more,
  children,
  className
}) => (
  <View className={className}>
    <List>
      { children }
    </List>
    <View>
      <StyledButton rounded onPress={more.action}>{more.text}</StyledButton>
    </View>
  </View>
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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import moment from 'moment';

import View from '../View';
import Text from '../Typography';

const Image = styled.Image`
  margin-left: 30px;
  height: 50px;
  width: 100px;
`;

const TextContainer = View.extend`
  align-self: stretch;
  flex-direction: column;
`;

const StyledLi = View.extend`
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 20px 20px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #dddddd;
`;

const NewsFeedItemNative = ({
  category,
  timestamp,
  title,
  image,
  className
}) => (
  <StyledLi className={className}>
    <TextContainer>
      <View>
        <Text>{ category.toUpperCase() }</Text>
        <Text> — </Text>
        <Text>{ moment(timestamp).calendar() }</Text>
      </View>
      <Text>
        { title }
      </Text>
    </TextContainer>
    { image && <Image source={{ uri: image }} alt="news image" /> }
  </StyledLi>
)
;

NewsFeedItemNative.propTypes = {
  category: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  className: PropTypes.string
};

export default styled(NewsFeedItemNative)``;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import moment from 'moment';

import View from '../View';
import Text, { H3 } from '../Typography';

const Image = styled.Image`
  margin-left: 30px;
  height: 80px;
  width: 30%;
`;

const TextContainer = View.extend`
  align-self: stretch;
  flex-direction: column;
  width: 55%;
`;

const Header = View.extend`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledLi = View.extend`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 15px 15px;
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
      <Header>
        <Text>{ category.toUpperCase() }</Text>
        <Text> — </Text>
        <Text>{ moment(timestamp).calendar() }</Text>
      </Header>
      <H3>
        { title }
      </H3>
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

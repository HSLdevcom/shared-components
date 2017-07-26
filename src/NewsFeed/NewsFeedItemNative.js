import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import moment from 'moment';

import View from '../View';
import Text, { H3 } from '../Typography';

const StyledH3 = H3.extend`
  color: ${props => props.theme.primary}
`;

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

const Timestamp = Text.extend`
  color: ${props => props.theme.secondary}
`;

const Category = Timestamp.extend`
  font-weight: 500;
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
        <Category>{ category.toUpperCase() } — </Category>
        <Timestamp>{ moment(timestamp).calendar() }</Timestamp>
      </Header>
      <StyledH3>
        { title }
      </StyledH3>
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

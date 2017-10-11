import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-brimitives';
import moment from 'moment';
import { size } from '../utils';

import View from '../View';
import Text, { H3 } from '../Typography';

const StyledH3 = H3.extend`
  font-size: ${size(24)}
  color: ${props => props.theme.font.colors.highlight}
`;

const ImageContainer = View.extend`
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-left: 30px;
  width: 30%;
`;

const Image = styled.Image`
  flex: 1;
  align-self: stretch;
  resizeMode: cover;
`;

const TextContainer = View.extend`
  flex: auto;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
`;

const Header = View.extend`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${size(10)};
`;

const StyledLi = View.extend`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 15px 15px;
  border-style: solid;
  border-color: ${props => props.theme.colors.primary.hslGreyLight};
  border-bottom-width: 1px;
`;

const Timestamp = Text.extend`
  color: ${props => props.theme.font.colors.secondary}
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
}) => {
  const imageElement = React.isValidElement(image) ?
    image : <Image source={{ uri: image }} alt={title} />;
  return (
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
      { image &&
        <ImageContainer>
          {imageElement}
        </ImageContainer>
      }
    </StyledLi>
  );
};

NewsFeedItemNative.propTypes = {
  category: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  className: PropTypes.string
};

export default styled(NewsFeedItemNative)``;

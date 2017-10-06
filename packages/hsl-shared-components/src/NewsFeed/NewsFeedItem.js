import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { size } from '../utils';

import Div from '../Div';
import Span from '../Span';
import { H3, P } from '../Typography';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
`;

const Image = styled.img`
  max-height: 7.5rem;
  max-width: 11.25rem;
`;

const TextContainer = Div.extend`
  display: flex;
  flex: auto;
  flex-direction: column;
`;

const StyledLi = styled.li`
  display: flex;
  padding: 1.25rem 1.25rem 1.25rem 1.75rem;
  border: 1px solid ${props => props.theme.colors.primary.hslGreyLight};
  border-bottom-width: 0;
  &:last-child {
    border-bottom-width: 1px;
  }
`;

const Meta = P.extend`
  font-size: ${size(11)};
  color: ${props => props.theme.font.colors.secondary};
`;

const Category = Span.extend`
  text-transform: uppercase;
`;

const Title = H3.extend`
  margin-top: 1rem;
  padding-bottom: 0.75rem;
  font-size: ${size(24)};
  color: ${props => props.theme.font.colors.highlight}
`;

const NewsFeedItem = ({
  category,
  timestamp,
  title,
  image,
  className
}) => {
  const imageElement = React.isValidElement(image) ? image : <Image src={image} alt={title} />;
  return (
    <StyledLi className={className}>
      <TextContainer>
        <Meta>
          <Category>{ category }</Category>
          <Span> — </Span>
          <Span>{ moment(timestamp).calendar() }</Span>
        </Meta>
        <Title>
          { title }
        </Title>
      </TextContainer>
      { image &&
        <ImageContainer>
          {imageElement}
        </ImageContainer>
      }
    </StyledLi>
  );
};

NewsFeedItem.propTypes = {
  category: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  className: PropTypes.string
};

export default styled(NewsFeedItem)``;

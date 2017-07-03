import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import Div from '../Div';
import Span from '../Span';

const Image = styled.img``;

const TextContainer = Div.extend``;

const StyledLi = styled.li`
  text-align: start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.25rem 1.25rem 1.75rem;
  border-bottom: 1px solid #dddddd;
  ${TextContainer} {
    display: flex;
    align-self: stretch;
    flex-direction: column;
    .top {
      font-size: 13px;
      color: ${props => props.theme.secondary};
      .category {
        text-transform: uppercase;
      }
    }
    .bottom {
      margin-top: 1rem;
      padding-bottom: 0.75rem;
      font-size: 28px;
      color: ${props => props.theme.primary}
    }
  }
  ${Image} {
    object-fit: contain;
    height: 7.5rem;
    width: 11.25rem;
  }
`;

const NewsFeedItem = ({
  category,
  timestamp,
  title,
  image,
  className
}) => (
  <StyledLi className={className}>
    <TextContainer className="text-container">
      <Span className="top">
        <Span className="category">{ category }</Span>
        <Span> — </Span>
        <Span>{ moment(timestamp).calendar() }</Span>
      </Span>
      <Span className="bottom">
        { title }
      </Span>
    </TextContainer>
    { image && <Image src={image} alt="news image" /> }
  </StyledLi>
)
;

NewsFeedItem.propTypes = {
  category: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  className: PropTypes.string
};

export default styled(NewsFeedItem)``;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { size } from '../utils';

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
  border: 1px solid ${props => props.theme.colors.primary.hslGreyLight};
  border-bottom-width: 0;
  &:last-child {
    border-bottom-width: 1px;
  }
  ${TextContainer} {
    display: flex;
    align-self: stretch;
    flex-direction: column;
    .top {
      font-size: ${size(11)};
      color: ${props => props.theme.font.colors.secondary};
      .category {
        text-transform: uppercase;
      }
    }
    .bottom {
      margin-top: 1rem;
      padding-bottom: 0.75rem;
      font-size: ${size(24)};
      color: ${props => props.theme.font.colors.highlight}
    }
  }
  ${Image} {
    margin-left: 2rem;
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

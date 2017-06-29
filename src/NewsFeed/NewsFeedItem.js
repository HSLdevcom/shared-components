import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import Div from '../Div';
import Span from '../Span';

const Image = styled.img``;

const StyledLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  .top {
    font-size: 13px;
  }
  .bottom {
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ${Image} {
    object-fit: contain;
    height: 120px;
    width: 180px;
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
    <Span className="top">
      { category } - { moment(timestamp).calendar() }
    </Span>
    <Div className="bottom">
      { title }
      <Image src={image} alt="news image" />
    </Div>
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

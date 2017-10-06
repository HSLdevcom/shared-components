import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BreadcrumbItem from './BreadcrumbItem';

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Breadcrumbs = styled(({ items, ...rest }) =>
  (
    <List {...rest}>
      {items.map((item, index) =>
        <ListItem key={/* eslint-disable react/no-array-index-key */ index}>
          <BreadcrumbItem {...item} />
        </ListItem>
      )}
    </List>
  )
)``;

Breadcrumbs.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BreadcrumbItem.propTypes))
};

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;

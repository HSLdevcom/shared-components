import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import View from '../View';
import BreadcrumbItem from './BreadcrumbItem';

const Container = View.extend`
  flex-direction: row;
  justify-content: flex-start;
`;

const Breadcrumbs = styled(({ items, ...rest }) =>
  (
    <Container {...rest}>
      {items.map((item, index) =>
        <BreadcrumbItem
          key={/* eslint-disable react/no-array-index-key */ index}
          {...item}
        />
      )}
    </Container>
  )
)``;

Breadcrumbs.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BreadcrumbItem.propTypes)),
};

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;

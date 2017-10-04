import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import View from '../View';
import Touchable from '../Touchable';
import BreadcrumbItem from './BreadcrumbItem';

const Container = View.extend`
  flex-direction: row;
  justify-content: flex-start;
`;

const Breadcrumbs = styled(({ items, ...rest }) =>
  (
    <Container {...rest}>
      {items.map((item, index) =>
        <Touchable
          key={/* eslint-disable react/no-array-index-key */ index}
          onPress={item.onPress}
          onLongPress={item.onLongPress}
        >
          <BreadcrumbItem {...item} />
        </Touchable>
      )}
    </Container>
  )
)``;

Breadcrumbs.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    ...BreadcrumbItem.propTypes,
  }))
};

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;

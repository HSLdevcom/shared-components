import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ActionListItem from './ActionListItem';

const ActionList = styled(({
  items,
  inverted,
  centered,
  arrowless,
  withBorder,
  ...rest
}) =>
  (
    <ul {...rest}>
      {items.map((item, index) =>
        (
          <li key={/* eslint-disable react/no-array-index-key */ index}>
            <ActionListItem
              inverted={inverted}
              centered={centered}
              arrowless={arrowless}
              withBorder={withBorder}
              first={index === 0}
              second={index === 1}
              secondToLast={index === (items.length - 2)}
              last={index === (items.length - 1)}
              {...item}
            />
          </li>
        )
      )}
    </ul>
  )
)`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

ActionList.displayName = 'ActionList';

ActionList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ActionListItem.propTypes)),
  inverted: PropTypes.bool,
  centered: PropTypes.bool,
  arrowless: PropTypes.bool,
  withBorder: PropTypes.bool,
};

export default ActionList;

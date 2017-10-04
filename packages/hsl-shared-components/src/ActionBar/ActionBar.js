import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ActionBarItem from './ActionBarItem';

const ListItem = styled.li`
  display: flex;
  flex: 1;
`;

const ActionBar = styled(({ items, inverted, ...rest }) =>
  (
    <ul {...rest}>
      {items.map((item, index) =>
        (
          <ListItem>
            <ActionBarItem
              key={/* eslint-disable react/no-array-index-key */index}
              inverted={inverted}
              first={index === 0}
              last={index === (items.length - 1)}
              {...item}
            />
          </ListItem>
        )
      )}
    </ul>
  )
)`
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: 8px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
`;

ActionBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ActionBarItem.propTypes)),
  inverted: PropTypes.bool,
};

ActionBar.displayName = 'ActionBar';

export default ActionBar;

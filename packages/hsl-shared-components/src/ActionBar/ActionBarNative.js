import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import View from '../View';
import ActionBarItem from './ActionBarItem';

const ActionBar = styled(({ items, inverted, ...rest }) =>
  (
    <View {...rest}>
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === (items.length - 1);

        if (React.isValidElement(item)) {
          return (
            React.cloneElement(
              item,
              {
                inverted,
                first: isFirst,
                last: isLast,
                ...item.props
              },
            )
          );
        }

        return (
          <ActionBarItem
            key={/* eslint-disable react/no-array-index-key */index}
            inverted={inverted}
            first={index === 0}
            last={index === (items.length - 1)}
            {...item}
          />
        );
      })}
    </View>
  )
)`
  border-top-width: 1px;
  border-right-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 0;
  padding: 0;
  flex-direction: row;
  justify-content: center;
`;

ActionBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape(ActionBarItem.propTypes),
      PropTypes.element,
    ])
  ),
  inverted: PropTypes.bool,
};

ActionBar.displayName = 'ActionBar';

export default ActionBar;

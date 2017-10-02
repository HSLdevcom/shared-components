import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ActionBarItem from './ActionBarItem';

const ActionBar = styled(({ items, inverted, ...rest }) => {
  return (
    <ul {...rest}>
      {items.map((item, index) =>
        (
          <ActionBarItem
            key={/* eslint-disable react/no-array-index-key */index}
            {...item}
            inverted={inverted}
            first={index === 0}
            last={index === (items.length - 1)}
          />
        )
      )}
    </ul>
  );
})`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.primary.hslGreyLight};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 0;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
`;

ActionBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ActionBarItem.propTypes)),
  inverted: PropTypes.bool,
};

ActionBar.displayName = 'ActionBar';

console.log(typeof ActionBar);

export default ActionBar;

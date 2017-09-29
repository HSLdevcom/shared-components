import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ActionListItem from './ActionListItem';

const ActionList = styled(({
  items,
  inverted,
  centered,
  arrowless,
  borderless,
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
              borderless={index === (items.length - 1)}
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
  ${props => !props.borderless && `
    border-width: 1px;
    border-style: solid;
    border-color: ${props.inverted ? props.theme.colors.primary.hslWhite : props.theme.colors.primary.hslGreyLight};
    border-radius: 6px;
  `}
`;

ActionList.displayName = 'ActionList';

ActionList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ActionListItem.propTypes)),
  inverted: PropTypes.bool,
  centered: PropTypes.bool,
  arrowless: PropTypes.bool,
  borderless: PropTypes.bool,
};

export default ActionList;

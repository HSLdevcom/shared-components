import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ActionListItem from './ActionListItem';

const ActionList = styled(({
  items,
  negative,
  centered,
  arrows,
  withBorder,
  ...rest
}) =>
  (
    <ul {...rest}>
      {items.map((item, index) =>
        (
          <li key={index}>
            <ActionListItem
              negative={negative}
              centered={centered}
              arrow={arrows}
              withBorder={index !== (items.length - 1)}
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
  ${props => props.withBorder && `
    border-width: 1px;
    border-style: solid;
    border-color: ${props.negative ? props.theme.colors.primary.hslWhite : props.theme.colors.primary.hslGreyLight};
    border-radius: 6px;
  `}
`;

ActionList.displayName = 'ActionList';

ActionList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ActionListItem.propTypes)),
  negative: PropTypes.bool,
  centered: PropTypes.bool,
  arrows: PropTypes.bool,
  withBorder: PropTypes.bool,
};

ActionList.defaultProps = {
  items: [],
  arrows: true,
  withBorder: true,
};

export default ActionList;

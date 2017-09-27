import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ActionListItem from './ActionListItem';

const ActionList = styled(({ items, ...rest }) => {
  return (
    <ul {...rest}>
      {items.map((item, index) =>
        (
          <li key={index}>
            <ActionListItem {...item} withBorder={index !== (items.length - 1)} />
          </li>
        )
      )}
    </ul>
  );
})`
  margin: 0;
  padding: 0;
  list-style-type: none;
  ${props => props.withBorder && `
    border-width: 1px;
    border-style: solid;
    border-color: ${props.theme.colors.primary.hslGreyLight};
    border-radius: 6px;
  `}
`;

ActionList.displayName = 'ActionList';

ActionList.propTypes = {
  withBorder: PropTypes.bool,
};

ActionList.defaultProps = {
  items: [{ title: 'foo' }, { title: 'bar' }],
  withBorder: true,
};

export default ActionList;

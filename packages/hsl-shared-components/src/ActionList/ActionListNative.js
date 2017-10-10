import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { ListView } from 'react-native';
import ActionListItem from './ActionListItem';

const StyledListView = styled.ListView``;

const ActionListNative = styled(({
  items,
  inverted,
  centered,
  arrowless,
  secondary,
  withBorder,
  ...rest,
}) => {
  const rowCount = items.getRowCount();
  return (
    <StyledListView
      inverted={inverted}
      withBorder={withBorder}
      dataSource={items}
      renderRow={(rowData, sectionId, rowId) => {
        const intRowId = parseInt(rowId, 10);
        return (
          <ActionListItem
            inverted={inverted}
            centered={centered}
            arrowless={arrowless}
            secondary={secondary}
            withBorder={withBorder}
            first={intRowId === 0}
            second={intRowId === 1}
            secondToLast={intRowId === (rowCount - 2)}
            last={intRowId === (rowCount - 1)}
            {...rowData}
          />
        );
      }
    }
      {...rest}
    />
  );
})``;

ActionListNative.displayName = 'ActionList';

ActionListNative.propTypes = {
  // Contained data is expected to follow the shape of ActionListItem.propTypes
  items: PropTypes.instanceOf(ListView.DataSource),
  inverted: PropTypes.bool,
  centered: PropTypes.bool,
  arrowless: PropTypes.bool,
  secondary: PropTypes.bool,
  withBorder: PropTypes.bool,
};

export default ActionListNative;

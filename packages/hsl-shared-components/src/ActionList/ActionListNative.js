import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import ActionListItem from './ActionListItem';

const StyledListView = styled.ListView`
`;

const ActionListNative = styled(({ items, negative, centered, arrows, ...rest }) =>
  (
    <StyledListView
      dataSource={items}
      renderRow={(rowData, sectionId, rowId) => (
        <ActionListItem
          negative={negative}
          centered={centered}
          arrow={arrows}
          withBorder={parseInt(rowId, 10) !== (items.getRowCount() - 1)}
          {...rowData}
          title={`${rowData.index} / ${(items.getRowCount() - 1)}`}
        />
      )}
      {...rest}
    />
  )
)``;

ActionListNative.displayName = 'ActionList';

ActionListNative.propTypes = {
  items: PropTypes.arrayOf(ActionListItem.propTypes),
};

ActionListNative.defaultProps = {
  arrows: true,
  withBorder: true,
};

export default ActionListNative;

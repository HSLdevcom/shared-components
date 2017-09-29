import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { ListView } from 'react-native';
import View from '../View';
import ActionListItem from './ActionListItem';

// Container is needed for the border styles to work
// – ListView doesn't seem to have support
const Container = View.extend`
  background-color: ${props => props.theme.colors.background.hslWhite};
  ${props => props.inverted && `
    background-color: ${props.theme.font.colors.highlight};
  `}
  ${props => props.withBorder && `
    border-width: 1px;
    border-style: solid;
    border-color: ${props.inverted ? props.theme.colors.primary.hslWhite : props.theme.colors.primary.hslGreyLight};
    border-radius: 6px;
  `}
`;

const ActionListNative = styled(({
  items,
  inverted,
  centered,
  arrowless,
  withBorder,
  ...rest,
}) =>
  (
    <Container
      inverted={inverted}
      withBorder={withBorder}
    >
      <ListView
        dataSource={items}
        renderRow={(rowData, sectionId, rowId) => (
          <ActionListItem
            inverted={inverted}
            centered={centered}
            arrowless={arrowless}
            withBorder={withBorder}
            first={parseInt(rowId, 10) === 0}
            last={parseInt(rowId, 10) === (items.getRowCount() - 1)}
            {...rowData}
          />
        )}
        {...rest}
      />
    </Container>
  )
)``;

ActionListNative.displayName = 'ActionList';

ActionListNative.propTypes = {
  // Contained data is expected to follow the shape of ActionListItem.propTypes
  items: PropTypes.instanceOf(ListView.DataSource),
  inverted: PropTypes.bool,
  centered: PropTypes.bool,
  arrowless: PropTypes.bool,
  withBorder: PropTypes.bool,
};

export default ActionListNative;

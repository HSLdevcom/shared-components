import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import View from '../View';
import ActionListItemText from './ActionListItemText';
import ActionListItemTeaser from './ActionListItemTeaser';
import { IS_NATIVE, size } from '../utils';
import { getBorderColor, getBackgroundColor, getVerticalListBorderStyles, getHorizontalListBorderStyles } from './utils';

const Container = styled(({
  active,
  centered,
  inverted,
  horizontal,
  arrowless,
  withBorder,
  first,
  second,
  secondToLast,
  last,
  ...rest,
}) =>
  <View {...rest} />
)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${props => props.centered && `
    justify-content: center;
  `}

  ${props => props.horizontal && `
    height: 100%;
  `}

  position: relative;
  padding-horizontal: ${size(18)};
  padding-vertical: ${size(18)};
  border-style: solid;
  border-color: ${props => getBorderColor(props)};
  background-color: ${props => getBackgroundColor(props)};
  overflow: hidden;

  ${props => !props.horizontal && getVerticalListBorderStyles(props)}
  ${props => props.horizontal && getHorizontalListBorderStyles(props)}

  ${!IS_NATIVE && 'cursor: pointer;'}
`;

const ActionListItem = ({
  type,
  active,
  centered,
  inverted,
  horizontal,
  arrowless,
  withBorder,
  first,
  second,
  secondToLast,
  last,
  ...rest,
}) => {
  const isTextItem = (!type || type === 'text');
  const isTeaserItem = (type === 'teaser');
  return (
    <Container
      active={active}
      centered={centered}
      inverted={inverted}
      horizontal={horizontal}
      arrowless={arrowless}
      withBorder={withBorder}
      first={first}
      second={second}
      secondToLast={secondToLast}
      last={last}
    >
      {isTextItem &&
        <ActionListItemText
          active={active}
          centered={centered}
          inverted={inverted}
          arrowless={arrowless}
          withBorder={withBorder}
          {...rest}
        />
      }
      {isTeaserItem &&
        <ActionListItemTeaser
          {...rest}
        />
      }
    </Container>
  );
};

ActionListItem.propTypes = {
  type: PropTypes.oneOf(['text', 'teaser']),
  active: PropTypes.bool,
  centered: PropTypes.bool,
  inverted: PropTypes.bool,
  horizontal: PropTypes.bool,
  arrowless: PropTypes.bool,
  withBorder: PropTypes.bool,
  first: PropTypes.bool,
  second: PropTypes.bool, // Native w/ rounded borders requires every border to have width
  secondToLast: PropTypes.bool, // Hence we need to know second & secondToLast
  last: PropTypes.bool,
};

ActionListItem.displayName = 'ActionListItem';

export default ActionListItem;

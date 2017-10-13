import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import { Platform } from 'react-primitives';
import Touchable from '../Touchable';
import View from '../View';
import { P } from '../Typography';
import ArrowRight from '../Icons/ArrowRight';
import { size } from '../utils';

// Padding-vertical and border-style are needed for touchable to work in android
const TouchableContainer = Touchable.extend`
  flex-direction: row;
  justify-content: flex-start;
  margin-right: ${size(10)};
`;

// Needed for the touchable in Android to have correct touch target
const ItemContainer = View.extend`
  flex-direction: row;
  justify-content: flex-start;
  padding-vertical: ${size(5)};
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
`;

const Title = P.extend`
  margin-right: ${size(10)};
  font-size: ${size(14)};
  color: ${props => props.theme.font.colors.highlight};
`;

const IconContainer = View.extend`
  ${Platform.OS === 'android' && `margin-top: ${size(7)};`}
`;

const ArrowIcon = withTheme(({ theme }) =>
  <ArrowRight height={size(10)} width={size(10)} fill={theme.colors.primary.hslBlue} />
);

const BreadcrumbItem = styled(({
  title,
  onClick,
  onPress,
  onLongPress,
  ...rest
}) =>
  (
    <TouchableContainer
      onClick={onClick}
      onPress={onPress}
      onLongPress={onLongPress}
      {...rest}
    >
      <ItemContainer>
        <Title>
          {title}
        </Title>
        <IconContainer>
          <ArrowIcon />
        </IconContainer>
      </ItemContainer>
    </TouchableContainer>
  )
)``;

BreadcrumbItem.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;

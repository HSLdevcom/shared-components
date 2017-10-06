import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { Platform } from 'react-primitives';
import { withTheme } from 'styled-components';
import Touchable from '../Touchable';
import View from '../View';
import { P } from '../Typography';
import ArrowRight from '../Icons/ArrowRight';
import { IS_NATIVE, size } from '../utils';

// Padding-vertical and border-style are needed for touchable to work in android
const ItemContainer = View.extend`
  flex-direction: row;
  justify-content: flex-start;
  margin-right: ${size(10)};
  padding-vertical: ${size(5)};
  border-style: solid;
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

const BreadcrumbItemCore = styled(({ title, type, href, onClick, ...rest }) =>
  (
    <ItemContainer
      accessibilityRole={type || 'link'}
      href={href}
      onClick={onClick}
      {...rest}
    >
      <Title>
        {title}
      </Title>
      <IconContainer>
        <ArrowIcon />
      </IconContainer>
    </ItemContainer>
  )
)``;

const BreadcrumbItem = styled(({
  onPress,
  onLongPress,
  ...rest,
}) => {
  // We want to have default browser interactions unless we are on native platform
  if (IS_NATIVE) {
    return (
      <Touchable
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <BreadcrumbItemCore {...rest} />
      </Touchable>
    );
  }

  return <BreadcrumbItemCore {...rest} />;
})``;

BreadcrumbItemCore.PropTypes = {
  type: PropTypes.oneOf(['link', 'button']),
  title: PropTypes.string,
  onClick: PropTypes.func,
};

BreadcrumbItem.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  ...BreadcrumbItemCore.propTypes,
};

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;

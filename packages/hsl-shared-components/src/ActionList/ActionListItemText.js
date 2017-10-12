import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import View from '../View';
import { H3, H4, P } from '../Typography';
import Touchable from '../Touchable';
import ArrowRight from '../Icons/ArrowRight';
import { IS_NATIVE, size } from '../utils';
import { getTextColor, getBackgroundColor } from './utils';

// Transparent borders below are for fixing touchable in android
// Need to define round borders here again for android compatibility
const TouchableContainer = styled(({
  first,
  last,
  ...rest
}) =>
  <Touchable {...rest} />
)`
  width: 100%;
  padding-top: ${size(18)};
  padding-right: ${size(18)};
  padding-bottom: ${size(18)};
  padding-left: ${size(18)};
  border-color: transparent;
  border-width: 1px;
  border-style: solid;
  ${props => props.first && `
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  `}
  ${props => props.last && `
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  `}
`;

const TitleAndIconContainer = styled(({
  centered,
  ...rest,
}) =>
  <View {...rest} />
)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  ${props => props.centered && `
    justify-content: center;
  `}
  width: 100%;
`;

const Icon = ({
  icon,
  theme,
  active,
  inverted,
  withBorder,
}) =>
  React.cloneElement(icon, {
    width: size(35),
    height: size(35),
    fill: getTextColor({ active, inverted, withBorder, theme }),
  });

const TitleContainer = styled(({
  icon,
  arrowless,
  centered,
  ...rest,
}) =>
  <View {...rest} />
)`
  flex-direction: column;
  align-items: flex-start;
  ${props => !props.centered && `
    flex-grow: 2;
  `}
  ${props => (props.icon || props.prefix) && `
    margin-left: ${size(18)};
  `}
  ${props => !props.arrowless && `
    margin-right: ${size(18)};
  `}
`;

const Prefix = styled(({
  active,
  inverted,
  withBorder,
  ...rest,
}) =>
  <H3 {...rest} />
)`
  margin-left: ${size(18)};
  color: ${props => getTextColor(props)};
`;

const Title = styled(({
  active,
  inverted,
  withBorder,
  ...rest,
}) =>
  <H4 {...rest} />
)`
  flex-wrap: wrap;
  color: ${props => getTextColor(props)};
`;

const Subtitle = styled(({
  active,
  inverted,
  withBorder,
  ...rest,
}) =>
  <P {...rest} />
)`
  ${!IS_NATIVE && `
    margin-top: ${size(5)};
  `}
  color: ${props => getTextColor(props, true)};
`;

const Description = styled(({
  active,
  inverted,
  centered,
  withBorder,
  ...rest,
}) =>
  <P {...rest} />
)`
  margin-top: ${size(15)};
  width: 100%;
  color: ${props => getTextColor(props, true)};
  ${props => props.centered && `
    align-self: center;
    text-align: center;
    padding-right: 0px;
  `}

`;

const ArrowIcon = withTheme(({
  theme,
  active,
  inverted,
  withBorder,
}) =>
  (
    <ArrowRight
      height={size(15)}
      width={size(10)}
      fill={getTextColor({ active, inverted, withBorder, theme })}
    />
  ));

const ActiveItemUnderline = styled(({
  active,
  inverted,
  withBorder,
  ...rest
}) => (
  <View {...rest} />
))`
  position: absolute;
  height: 3px;
  bottom: -2px;
  left: -50%;
  width: 200%;
  ${props => props.active && !props.inverted && !props.withBorder && `
    background-color: ${props.theme.colors.primary.hslBlue};
  `}
`;

const ActionListItemText = styled(withTheme(({
  active,
  prefix,
  title,
  subtitle,
  description,
  icon,
  arrowless,
  withBorder,
  centered,
  inverted,
  secondary,
  first,
  second,
  secondToLast,
  last,
  onPress,
  onLongPress,
  onClick,
  theme,
  ...rest,
}) =>
  (
    <TouchableContainer
      onPress={onPress}
      onLongPress={onLongPress}
      onClick={onClick}
      pressedStyle={{
        backgroundColor: getBackgroundColor({
          pressed: true,
          active,
          inverted,
          secondary,
          withBorder,
          theme,
        }),
      }}
      first={first}
      last={last}
      {...rest}
    >
      <TitleAndIconContainer
        centered={centered}
      >
        {!!icon &&
          <Icon
            icon={icon}
            active={active}
            inverted={inverted}
            withBorder={withBorder}
            theme={theme}
          />
        }
        {!!prefix &&
          <Prefix
            active={active}
            inverted={inverted}
            withBorder={withBorder}
          >
            {prefix}
          </Prefix>
        }
        <TitleContainer
          icon={!!icon}
          prefix={prefix}
          arrowless={arrowless}
          centered={centered}
        >
          <Title
            active={active}
            inverted={inverted}
            withBorder={withBorder}
          >
            {title}
          </Title>
          {!!subtitle &&
            <Subtitle
              active={active}
              inverted={inverted}
              withBorder={withBorder}
            >
              {subtitle}
            </Subtitle>
          }
        </TitleContainer>
        {!arrowless &&
          <ArrowIcon
            active={active}
            inverted={inverted}
            withBorder={withBorder}
          />
        }
      </TitleAndIconContainer>
      {!!description &&
        <Description
          active={active}
          inverted={inverted}
          centered={centered}
          withBorder={withBorder}
        >
          {description}
        </Description>
      }
      <ActiveItemUnderline
        active={active}
        inverted={inverted}
        withBorder={withBorder}
      />
    </TouchableContainer>
)))``;

ActionListItemText.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.element,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
  arrowless: PropTypes.bool,
  withBorder: PropTypes.bool,
  inverted: PropTypes.bool,
  secondary: PropTypes.bool,
  first: PropTypes.bool, // Needed just for Android compatibility
  last: PropTypes.bool, // Needed just for Android compatibility
};

ActionListItemText.displayName = 'ActionListItemText';

export default ActionListItemText;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { Platform } from 'react-primitives';
import { withTheme } from 'styled-components';
import View from '../View';
import { H3, H4, P } from '../Typography';
import Touchable from '../Touchable';
import ArrowRight from '../Icons/ArrowRight';
import { IS_NATIVE, size } from '../utils';

const getTextColor = (props, secondary = false) => {
  if (props.inverted && props.active) {
    return props.theme.font.colors.highlight;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.withBorder && props.active) {
    return props.theme.colors.primary.hslWhite;
  }
  if (secondary) {
    return props.theme.font.colors.default;
  }
  return props.theme.font.colors.highlight;
};

const getBorderColor = (props) => {
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.withBorder && props.active) {
    return props.theme.colors.primary.hslBlue;
  }
  if (props.withBorder) {
    return props.theme.colors.primary.hslGreyLight;
  }
  if (props.active) {
    return props.theme.colors.primary.hslBlue;
  }
  return props.theme.colors.primary.hslGreyLight;
};

const getBackgroundColor = (props) => {
  if (props.inverted && props.active) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslBlue;
  }
  if (props.withBorder && props.active) {
    return props.theme.colors.primary.hslBlue;
  }
  return props.theme.colors.primary.hslWhite;
};

const Container = styled(({
  active,
  centered,
  inverted,
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
  position: relative;
  padding-horizontal: ${size(18)};
  padding-vertical: ${size(18)};
  border-style: solid;
  border-color: ${props => getBorderColor(props)};
  background-color: ${props => getBackgroundColor(props)};
  overflow: hidden;

  border-bottom-width: 1px;

  ${props => props.withBorder && `
    border-top-width: 0px;
    border-right-width: 1px;
    border-left-width: 1px;
  `}

  ${props => props.withBorder && props.first && `
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-top-width: 1px;
    border-width: 1px;
  `}

  ${props => Platform.OS === 'android' && props.withBorder && props.secondToLast && `
    border-bottom-width: 0px;
  `}

  ${props => props.withBorder && props.last && `
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-width: 1px;
  `}

  ${!IS_NATIVE && 'cursor: pointer;'}
`;

const TitleAndIconContainer = styled(({
  icon,
  arrowless,
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

const Icon = withTheme(({
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
  })
);

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
  padding-right: ${size(20)};
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
  bottom: 0;
  left: 0;
  width: 200%;
  ${props => props.active && !props.inverted && !props.withBorder && `
    background-color: ${props.theme.colors.primary.hslBlue};
  `}
`;

const ActionListItemCore = ({
  type,
  href,
  active,
  prefix,
  title,
  subtitle,
  description,
  icon,
  arrowless,
  withBorder,
  centered,
  first,
  second,
  secondToLast,
  last,
  inverted,
  ...rest,
}) =>
  (
    <Container
      accessibilityRole={type || 'button'}
      href={href}
      active={active}
      centered={centered}
      inverted={inverted}
      withBorder={withBorder}
      first={first}
      second={second}
      secondToLast={secondToLast}
      last={last}
      {...rest}
    >
      <TitleAndIconContainer
        active={active}
        inverted={inverted}
        centered={centered}
        withBorder={withBorder}
      >
        {!!icon &&
          <Icon
            icon={icon}
            active={active}
            inverted={inverted}
            withBorder={withBorder}
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
    </Container>
);

const ActionListItem = styled(({
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
        <ActionListItemCore {...rest} />
      </Touchable>
    );
  }

  return <ActionListItemCore {...rest} />;
})``;

ActionListItemCore.propTypes = {
  type: PropTypes.oneOf(['button', 'link']), // Not available in native
  href: PropTypes.string, // Not available in native
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.element,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
  arrowless: PropTypes.bool,
  withBorder: PropTypes.bool,
  first: PropTypes.bool,
  second: PropTypes.bool, // Native w/ rounded borders requires every border to have width
  secondToLast: PropTypes.bool, // Hence we need to know second & secondToLast
  last: PropTypes.bool,
  inverted: PropTypes.bool,
};

ActionListItem.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  ...ActionListItemCore.propTypes,
};

ActionListItem.displayName = 'ActionListItem';

export default ActionListItem;

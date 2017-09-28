import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import View from '../View';
import { H3, H4, P } from '../Typography';
import Touchable from '../Touchable';
import ArrowRight from '../Icons/ArrowRight';
import { IS_NATIVE, size } from '../utils';

const Container = styled(({
  active,
  centered,
  inverted,
  withBorder,
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
  padding-horizontal: ${size(18)};
  border-style: solid;
  border-color: transparent;
  ${props => props.withBorder && `
    border-bottom-width: 1px;
    border-color: ${props.inverted ? props.theme.colors.primary.hslWhite : props.theme.colors.primary.hslGreyLight};
  `}
  ${props => props.active && `
    margin-bottom: -2px;
    border-bottom-width: 3px;
    border-color: ${props.inverted ? props.theme.colors.primary.hslWhite : props.theme.font.colors.highlight};
  `}
  ${!IS_NATIVE && 'cursor: pointer;'}
`;

const Icon = withTheme(({ icon, theme, inverted }) =>
  React.cloneElement(icon, {
    width: size(35),
    height: size(35),
    fill: inverted ? theme.colors.primary.hslWhite : theme.font.colors.highlight,
  })
);

const TitleContainer = styled(({
  icon,
  arrow,
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
  margin-vertical: ${size(18)};
  ${props => (props.icon || props.prefix) && `
    margin-left: ${size(18)};
  `}
  ${props => props.arrow && `
    margin-right: ${size(18)};
  `}
`;

const Prefix = styled(({
  inverted,
  ...rest,
}) =>
  <H3 {...rest} />
)`
  margin-left: ${size(18)};
  color: ${props => props.theme.font.colors.highlight};
  ${props => props.inverted && `
    color: ${props.theme.colors.primary.hslWhite};
  `}
`;

const Title = styled(({
  inverted,
  ...rest,
}) =>
  <H4 {...rest} />
)`
  flex-wrap: wrap;
  color: ${props => props.theme.font.colors.highlight};
  ${props => props.inverted && `
    color: ${props.theme.colors.primary.hslWhite};
  `}
`;

const Subtitle = styled(({
  inverted,
  ...rest,
}) =>
  <P {...rest} />
)`
  ${!IS_NATIVE && `
    margin-top: ${size(5)};
  `}
  color: ${props => props.theme.font.colors.secondary};
  ${props => props.inverted && `
    color: ${props.theme.colors.primary.hslWhite};
  `}
`;

const ArrowIcon = withTheme(({
  theme,
  active,
  inverted,
}) => {
  const fill = (() => {
    if (inverted) {
      return theme.colors.primary.hslWhite;
    }
    if (active) {
      return theme.font.colors.highlight;
    }
    return theme.font.colors.default;
  })();

  return (
    <ArrowRight
      height={size(15)}
      width={size(10)}
      fill={fill}
    />
  );
});

const ActionListItemCore = ({
  type,
  href,
  active,
  prefix,
  title,
  subtitle,
  icon,
  arrow,
  centered,
  withBorder,
  inverted,
  ...rest,
}) =>
  (
    <Container
      accessibilityRole={type}
      href={href}
      active={active}
      centered={centered}
      inverted={inverted}
      withBorder={withBorder}
      {...rest}
    >
      {!!icon &&
        <Icon
          icon={icon}
          inverted={inverted}
        />
      }
      {!!prefix &&
        <Prefix
          inverted={inverted}
        >
          {prefix}
        </Prefix>
      }
      <TitleContainer
        icon={!!icon}
        prefix={prefix}
        arrow={arrow}
        centered={centered}
      >
        <Title
          inverted={inverted}
        >
          {title}
        </Title>
        {!!subtitle &&
          <Subtitle
            inverted={inverted}
          >
            {subtitle}
          </Subtitle>
        }
      </TitleContainer>
      {arrow &&
        <ArrowIcon
          active={active}
          inverted={inverted}
        />
      }
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
  icon: PropTypes.element,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
  arrow: PropTypes.bool,
  withBorder: PropTypes.bool,
  inverted: PropTypes.bool,
};

ActionListItem.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  ...ActionListItemCore.propTypes,
};

ActionListItem.defaultProps = {
  type: 'button',
  arrow: true,
  centered: false,
  withBorder: true,
};

ActionListItem.displayName = 'ActionListItem';

export default ActionListItem;

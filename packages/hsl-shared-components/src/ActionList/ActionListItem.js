import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import View from '../View';
import { H3, H4, P } from '../Typography';
import Touchable from '../Touchable';
import ArrowRight from '../Icons/ArrowRight';
import { IS_NATIVE, size } from '../utils';

const getTextColor = (props) => {
  if (props.active && props.inverted) {
    return props.theme.font.colors.highlight;
  }
  if (props.inverted) {
    return props.theme.colors.primary.hslWhite;
  }
  if (props.active && props.parentHasBorder) {
    return props.theme.colors.primary.hslWhite;
  }
  return props.theme.font.colors.highlight;
};

const Container = styled(({
  active,
  centered,
  inverted,
  parentHasBorder,
  first,
  last,
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
  border-bottom-width: 1px;

  ${props => props.first && props.parentHasBorder && `
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  `}

  ${props => props.last && props.parentHasBorder && `
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  `}
  ${props => !props.last && `
    border-color: ${props.inverted ? props.theme.colors.primary.hslWhite : props.theme.colors.primary.hslGreyLight};
  `}

  ${props => props.active && !props.inverted && `
      margin-bottom: -2px;
      border-bottom-width: 3px;
      border-color: ${props.theme.font.colors.highlight};
  `}

  ${!IS_NATIVE && 'cursor: pointer;'}
`;

const Icon = withTheme(({
  icon,
  theme,
  active,
  inverted,
  parentHasBorder,
}) =>
  React.cloneElement(icon, {
    width: size(35),
    height: size(35),
    fill: getTextColor({ active, inverted, parentHasBorder, theme }),
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
  margin-vertical: ${size(18)};
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
  parentHasBorder,
  ...rest,
}) =>
  <H3 {...rest} />
)`
  margin-left: ${size(18)};
  color: ${props => getTextColor(props)}
`;

const Title = styled(({
  active,
  inverted,
  parentHasBorder,
  ...rest,
}) =>
  <H4 {...rest} />
)`
  flex-wrap: wrap;
  color: ${props => getTextColor(props)}
`;

const Subtitle = styled(({
  active,
  inverted,
  parentHasBorder,
  ...rest,
}) =>
  <P {...rest} />
)`
  ${!IS_NATIVE && `
    margin-top: ${size(5)};
  `}
  color: ${props => getTextColor(props)}
`;

const ArrowIcon = withTheme(({
  theme,
  active,
  inverted,
  parentHasBorder,
}) =>
  (
    <ArrowRight
      height={size(15)}
      width={size(10)}
      fill={getTextColor({ active, inverted, parentHasBorder, theme })}
    />
  ));

const ActionListItemCore = ({
  type,
  href,
  active,
  prefix,
  title,
  subtitle,
  icon,
  arrowless,
  parentHasBorder,
  centered,
  first,
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
      parentHasBorder={parentHasBorder}
      first={first}
      last={last}
      {...rest}
    >
      {!!icon &&
        <Icon
          icon={icon}
          active={active}
          inverted={inverted}
          parentHasBorder={parentHasBorder}
        />
      }
      {!!prefix &&
        <Prefix
          active={active}
          inverted={inverted}
          parentHasBorder={parentHasBorder}
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
          parentHasBorder={parentHasBorder}
        >
          {title}
        </Title>
        {!!subtitle &&
          <Subtitle
            active={active}
            inverted={inverted}
            parentHasBorder={parentHasBorder}
          >
            {subtitle}
          </Subtitle>
        }
      </TitleContainer>
      {!arrowless &&
        <ArrowIcon
          active={active}
          inverted={inverted}
          parentHasBorder={parentHasBorder}
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
})`
  ${props => props.active && props.parentHasBorder && !props.inverted && `
    background-color: ${props.theme.font.colors.highlight};
  `}
  ${props => props.inverted && props.active && `
    background-color: ${props.theme.colors.background.hslWhite};
  `}
`;

ActionListItemCore.propTypes = {
  type: PropTypes.oneOf(['button', 'link']), // Not available in native
  href: PropTypes.string, // Not available in native
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
  arrowless: PropTypes.bool,
  parentHasBorder: PropTypes.bool,
  first: PropTypes.bool,
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

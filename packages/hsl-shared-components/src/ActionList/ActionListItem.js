import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import View from '../View';
import { H4, P } from '../Typography';
import Touchable from '../Touchable';
import ArrowRight from '../Icons/ArrowRight';
import { IS_NATIVE, size } from '../utils';

const Container = View.extend`
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
    border-color: ${props.negative ? props.theme.colors.primary.hslWhite : props.theme.colors.primary.hslGreyLight};
  `}
  ${props => props.active && `
    margin-bottom: -2px;
    border-bottom-width: 3px;
    border-color: ${props.negative ? props.theme.colors.primary.hslWhite : props.theme.font.colors.highlight};
  `}
`;

const Icon = withTheme(({ icon, theme, negative }) =>
  React.cloneElement(icon, {
    width: size(35),
    height: size(35),
    fill: negative ? theme.colors.primary.hslWhite : theme.font.colors.highlight,
  })
);

const TitleContainer = View.extend`
  flex-direction: column;
  align-items: flex-start;
  ${props => !props.centered && `
    flex-grow: 2;
  `}
  margin-vertical: ${size(18)};
  ${props => props.icon && `
    margin-left: ${size(18)};
  `}
  ${props => props.arrow && `
    margin-right: ${size(18)};
  `}
`;

const Title = H4.extend`
  flex-wrap: wrap;
  color: ${props => props.theme.font.colors.highlight};
  ${props => props.negative && `
    color: ${props.theme.colors.primary.hslWhite};
  `}
`;

const Subtitle = P.extend`
  ${!IS_NATIVE && `
    margin-top: ${size(5)};
  `}
  color: ${props => props.theme.font.colors.secondary};
  ${props => props.negative && `
    color: ${props.theme.colors.primary.hslWhite};
  `}
`;

const ArrowIcon = withTheme(({ theme, active, negative }) => {
  const fill = (() => {
    if (negative) {
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

const ActionListItem = styled(({
  type,
  href,
  active,
  title,
  subtitle,
  icon,
  arrow,
  centered,
  withBorder,
  negative,
  onPress,
  onLongPress,
  ...rest,
}) =>
  (
    <Touchable
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Container
        accessibilityRole={type}
        active={active}
        href={href}
        centered={centered}
        withBorder={withBorder}
        negative={negative}
        {...rest}
      >
        {!!icon &&
          <Icon
            icon={icon}
            negative={negative}
          />
        }
        <TitleContainer
          icon={!!icon}
          arrow={arrow}
          centered={centered}
        >
          <Title
            negative={negative}
          >
            {title}
          </Title>
          {!!subtitle &&
            <Subtitle
              negative={negative}
            >
              {subtitle}
            </Subtitle>
          }
        </TitleContainer>
        {arrow &&
          <ArrowIcon
            active={active}
            negative={negative}
          />
        }
      </Container>
    </Touchable>
  )
)``;

ActionListItem.propTypes = {
  type: PropTypes.oneOf(['button', 'link']),
  href: PropTypes.string,
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
  arrow: PropTypes.bool,
  withBorder: PropTypes.bool,
  negative: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  theme: PropTypes.shape({
    font: {
      highlight: PropTypes.string,
    }
  }),
};

ActionListItem.defaultProps = {
  type: 'button',
  arrow: true,
  centered: false,
  withBorder: true,
};

ActionListItem.displayName = 'ActionListItem';

export default ActionListItem;

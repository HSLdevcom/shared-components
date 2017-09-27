import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import View from '../View';
import { H4 } from '../Typography';
import Touchable from '../Touchable';
import ArrowRight from '../Icons/ArrowRight';
import { size } from '../utils';

const Container = View.extend`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  ${props => props.centered && `
    justify-content: center;
  `}
  border-bottom-width: 3px;
  border-style: solid;
  border-color: transparent;
  ${props => props.active && `
    border-color: ${props.theme.font.colors.highlight};
  `}
`;

const Icon = withTheme(({ icon, theme }) =>
  React.cloneElement(icon, {
    width: size(35),
    height: size(35),
    fill: theme.font.colors.highlight,
  })
);

const Title = H4.extend`
  ${props => !props.centered && `
    flex-grow: 2;
  `}
  flex-wrap: wrap;
  margin-vertical: ${size(18)};
  ${props => props.icon && `
    margin-left: ${size(15)};
  `}
  ${props => props.arrow && `
    margin-right: ${size(15)};
  `}
  color: ${props => props.theme.font.colors.highlight};
`;

const ArrowIcon = withTheme(({ theme }) =>
  <ArrowRight height={size(15)} width={size(15)} fill={theme.font.colors.highlight} />
);

const FaqButton = styled(({
  type,
  href,
  title,
  subtitle,
  icon,
  arrow,
  centered,
  onPress,
  onLongPress,
  ...rest,
}) => {
  return (
    <Touchable
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Container
        accessibilityRole={type}
        href={href}
        centered={centered}
        {...rest}
      >
        {icon &&
          <Icon icon={icon} />
        }
        <Title
          icon={!!icon}
          arrow={arrow}
          centered={centered}
        >
          {title}
        </Title>
        {arrow &&
          <ArrowIcon />
        }
      </Container>
    </Touchable>
  );
})``;

FaqButton.propTypes = {
  type: PropTypes.oneOf(['button', 'link']),
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
  arrow: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  theme: PropTypes.shape({
    font: {
      highlight: PropTypes.string,
    }
  }),
};

FaqButton.defaultProps = {
  type: 'button',
  arrow: true,
  centered: false,
};

FaqButton.displayName = 'FaqButton';

export default FaqButton;

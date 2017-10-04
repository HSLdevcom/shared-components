import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { Platform } from 'react-primitives';
import { withTheme } from 'styled-components';
import View from '../View';
import { P } from '../Typography';
import ArrowRight from '../Icons/ArrowRight';
import { size } from '../utils';

const ItemContainer = View.extend`
  flex-direction: row;
  justify-content: flex-start;
  margin-right: ${size(10)};
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

const BreadcrumbItem = styled(({ title, type, href, onClick, ...rest }) =>
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

BreadcrumbItem.PropTypes = {
  type: PropTypes.oneOf(['link', 'button']),
  title: PropTypes.string,
  onClick: PropTypes.func,
};

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;

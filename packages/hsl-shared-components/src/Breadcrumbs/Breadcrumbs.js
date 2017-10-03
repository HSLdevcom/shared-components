import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { withTheme } from 'styled-components';
import View from '../View';
import { P } from '../Typography';
import ArrowLeft from '../Icons/ArrowLeft';
import { size } from '../utils';

const Container = View.extend`
  flex-direction: row;
  justify-content: flex-start;
`;

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

const ArrowIcon = withTheme(styled(({ theme }) =>
  <ArrowLeft height="10px" width="10px" fill={theme.colors.primary.hslBlue} />
)``);

const Item = styled(({ title, ...rest }) => {
  return (
    <ItemContainer>
      <Title {...rest}>
        {title}
      </Title>
      <ArrowIcon />
    </ItemContainer>
  );
})``;

const Breadcrumbs = styled(({ items, ...rest}) => {
  return (
    <Container {...rest}>
      {items.map((item, index) =>
        <Item key={index} {...item} />
      )}
    </Container>
  );
})``;

Breadcrumbs.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  }))
};

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;

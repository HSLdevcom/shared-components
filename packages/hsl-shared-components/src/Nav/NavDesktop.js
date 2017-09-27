import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import View from '../View';
import { size, Responsive } from '../utils';

const StyledView = styled(({ scroll, ...rest }) => (
  <View {...rest} />
))`
  flex-direction: row;
  justify-content: space-between;
  background: ${props => props.theme.colors.primary.hslBlue};
  ${props => props.scroll && `padding-left: ${size(16)};`}
`;

const Logo = styled(({ children, scroll }) => {
  if (scroll) {
    return React.cloneElement(children, { height: '2rem' });
  }
  return (<Responsive
    small={React.cloneElement(children, { height: '2.75rem' })}
    large={React.cloneElement(children, { height: '3.25rem' })}
    xlarge={React.cloneElement(children, { height: '3.75rem' })}
  />);
})``;

const Nav = ({
  logo,
  menu,
  scroll,
  children }) =>
    (<StyledView
      accessibilityRole="navigation"
      scroll={scroll}
    >
      <Logo scroll={scroll}>{logo}</Logo>
      {React.Children.map(
        children,
        child => React.cloneElement(
          child,
          {
            small: scroll
          })
        )
      }
      { menu }
    </StyledView>);

Nav.propTypes = {
  logo: PropTypes.element.isRequired,
  menu: PropTypes.element,
  scroll: PropTypes.bool,
  children: PropTypes.node
};

export default styled(Nav)``;

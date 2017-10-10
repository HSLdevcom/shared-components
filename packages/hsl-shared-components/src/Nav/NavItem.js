import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import NavItemDesktop from './NavItemDesktop';
import NavItemMobile from './NavItemMobile';
import { Responsive } from '../utils';


const NavItem = ({
  small,
  ...rest
}) => (
  <Responsive
    small={<NavItemMobile {...rest} />}
    medium={<NavItemDesktop {...rest} small={small} />}
  />
)
;

NavItem.propTypes = {
  link: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  active: PropTypes.bool,
  small: PropTypes.bool
};

export default styled(NavItem)``;

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';


const StyledAppBarSmall = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.background};
  height: 60px;
  @media(max-width: ${props => props.theme.md}) {
    display: flex;
  }
`;

function AppBarSmall(props) {
  const navItems = props.navItems.map(item =>
    (<Link key={item.name} to={item.route}>{item.nameEn}</Link>)
  );

  return (
    <StyledAppBarSmall>
      {navItems}
    </StyledAppBarSmall>
  );
}

AppBarSmall.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default AppBarSmall;

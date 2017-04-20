import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavList = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const StyledNavItem = styled.div`
  padding: 5%;
`;

function NavItems(props) {
  const items = props.items.map((item) => {
    console.log(item);
    return (
      <StyledNavItem key={item.name}>
        <a href={item.route}>
          {item.name}
        </a>
      </StyledNavItem>
    );
  });
  return (
    <StyledNavList>
      {items}
    </StyledNavList>
  );
}
NavItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NavItems;

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import MainMenu from '../MainMenu/MainMenu';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.background};
  height: 60px;
  .title {
    font-size: 1em;
    display:none;
    @media(max-width: ${props => props.theme.md}) {
      display: block;
    }
  }
`;

function AppBar(props) {
  return (
    <StyledNav>
      <section className="title">
        {(props.showLogo)
          ? <div className="logo" />
          : <span className="title">{props.title}</span>}
      </section>
      <MainMenu {...props} />
    </StyledNav >
  );
}
AppBar.propTypes = {
  showLogo: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
export default AppBar;

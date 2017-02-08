import React from 'react';
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
  console.log(props);
  return (
    <StyledNav>
      <section className="title">
        {(props.showLogo && !config.textLogo)
          ? <div className="logo"/>
          : <span className="title">{props.title}</span>}
      </section>
      <MainMenu {...props}/>
    </StyledNav>
  );
}
export default AppBar;

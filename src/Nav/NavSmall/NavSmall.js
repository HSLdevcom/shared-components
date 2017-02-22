import React, { PropTypes } from 'react';
import styled from 'styled-components';


const StyledNavSmall = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: visible;
  @media(max-width: ${props => props.theme.md}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
    input {
      width: 40px;
      height: 32px;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 5px;
      opacity: 0; /* hide this */
      z-index: 10; /* and place it over the hamburger */

      -webkit-touch-callout: none; /* disable iOS specific link highlight on hold */
    }

    span {
      display: block;
      align-self: flex-end;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      margin-right: 5px;
      position: relative;
      background: white;
      border-radius: 3px;
      z-index: 5;
    }
    .mobile-drawer {
      display: block;
      position: absolute;
      top: 100%;
      right: 0;
      width: 300px;
      background: #ededed;
      list-style-type: none;
      -webkit-font-smoothing: antialiased; /* to stop flickering of text in safari */
      transform: translate(100%, 0);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
      a {
        display: block;
        margin: 25px 10px;
      }
    }
    input:checked ~ .mobile-drawer {
      transform: translate(0%, 0);
    }

`;

const NavSmall = ({ children }) =>
  <StyledNavSmall>
    <input type="checkbox" />
    <span />
    <span />
    <span />
    <div className="mobile-drawer">
      {children}
    </div>
  </StyledNavSmall>;

NavSmall.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavSmall;

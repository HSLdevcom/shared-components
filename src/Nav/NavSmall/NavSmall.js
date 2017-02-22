import React, { PropTypes } from 'react';
import styled from 'styled-components';


const StyledNavSmall = styled.div`
  display: none;
  /* width: 100%; */
  height: 100%;
  position: relative;
  @media(max-width: ${props => props.theme.md}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: flex-end; */
  }
    input {
      width: 40px;
      height: 32px;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 0;
      opacity: 0; /* hide this */
      z-index: 10; /* and place it over the hamburger */

      -webkit-touch-callout: none; /* disable iOS specific link highlight on hold */
    }

    span {
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      margin-right: 5px;
      background: #fff;
      border-radius: 3px;
      z-index: 5;
      transform-origin: 4px 0px;
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
    }
    span:nth-child(4) {
      margin-bottom: 0;
    }

    span:first-child {
      transform-origin: 0% 0%;
    }

    span:nth-last-child(2) {
      transform-origin: 0% 100%;
    }

    input:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
    }

    input:checked ~ span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    input:checked ~ span:nth-last-child(2) {
      opacity: 1;
      transform: rotate(-45deg) translate(0, -1px);
    }

    .mobile-drawer {
      position: absolute;
      top: 0;
      right: 0;
      width: 300px;
      padding-top: ${props => props.theme.navbarHeight};
      background: #333;
      transform: translate(100%, 0);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
      a {
        display: block;
        margin: 25px 10px;
        color: #fff;
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

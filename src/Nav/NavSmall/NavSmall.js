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
      background: white;
      border-radius: 3px;
      z-index: 5;
    }
    span:nth-child(4) {
      margin-bottom: 0;
    }
    .mobile-drawer {
      position: absolute;
      top: 100%;
      right: 0;
      width: 300px;
      background: #ededed;
      transform: translate(100%, 0);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
      a {
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

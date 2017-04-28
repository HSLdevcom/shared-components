import React from 'react';
import PropTypes from 'prop-types';
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
      z-index: 900; /* and place it over the hamburger */

      -webkit-touch-callout: none; /* disable iOS specific link highlight on hold */
    }

    span {
      width: 25px;
      height: 2px;
      margin-bottom: 4px;
      margin-right: 15px;
      background: #fff;
      border-radius: 3px;
      z-index: 899;
      transform-origin: 4px 1px;
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
    }
    span:nth-child(4) {
      margin-bottom: 0;
    }



    input:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(0px, 0px);
      z-index:900;
    }

    input:checked ~ span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    input:checked ~ span:nth-last-child(2) {
      opacity: 1;
      transform: rotate(-45deg) translate(0px, 0px);
    }

    .mobile-drawer {
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
      background: #333;
      transform: translate(100%, 0);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
      z-index: 899;
      ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: ${props => props.theme.navbarHeight};
        list-style-type: none;
        margin: 0;
        padding-left: 15px;
        border-bottom: 1px solid #222;
        color: #fff;
        li {
          display: inline;
          cursor: pointer;
          padding: 5px;
          margin-right: 5px;
          border-radius: 5px;
          &:hover {
            background-color: #222;
          }
        }
      }
      a {
        display: block;
        cursor: pointer;
        text-align: right;
        padding: 30px 15px;
        border-radius: 5px;
        color: #fff;
        text-decoration: none;
        &:hover {
          background-color: #222;
        }
      }
    }
    input:checked ~ .mobile-drawer {
      transform: translate(0%, 0);
    }

`;

const NavSmall = ({ children, languages, changeLanguage }) =>
  <StyledNavSmall>
    <input type="checkbox" />
    <span />
    <span />
    <span />
    <div className="mobile-drawer">
      <ul>
        {languages.map(lang =>
          <li onClick={() => changeLanguage(lang.id)} key={lang.id}>{lang.name}</li> // eslint-disable-line
        )}
      </ul>
      {children}
    </div>
  </StyledNavSmall>;

NavSmall.propTypes = {
  children: PropTypes.node.isRequired,
  changeLanguage: PropTypes.func,
  languages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired
};

export default NavSmall;

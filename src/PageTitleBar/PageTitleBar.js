import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background-color: #fff;
  width: 100vw;
  left: calc(-50vw + 50%);
  margin-bottom: 1em;
  h1 {
    font-size: 1.2em;
    letter-spacing: -0.8px;
    color: ${props => props.theme.primary};
    text-align: center;
    margin: 1em auto;
    font-weight: normal;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.2em;
    width: 3em;
    height: 100%;
    text-align: center;
    border-width: 0;
    border: none;
    background-color: #fff;
    border-right: 1px solid #ddd;
    padding: 0;
    img {
      height: 1em;
      margin: auto;
    }
  }
`;


const PageTitleBar = ({ children, text, backButton, onBackClick, className }) =>
  <Div className={className}>
    {backButton &&
      <button onClick={onBackClick}>
        <img src={backButton} alt="placeholder" />
      </button>
    }
    {children}
  </Div>;

PageTitleBar.propTypes = {
  children: PropTypes.node.isRequired,
  backButton: PropTypes.string,
  onBackClick: PropTypes.func,
  className: PropTypes.string
};

export default PageTitleBar;

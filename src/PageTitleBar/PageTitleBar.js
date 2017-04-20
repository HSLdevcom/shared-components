import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
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
    top: 50%;
    transform: perspective(1px) translateY(-50%);
    left: 0;
    width: 35px;
    height: 50%;
    text-align: center;
    border-width: 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    img {
      height: 1em;
      margin: auto;
    }
  }
`;


const PageTitleBar = ({ text, icon, onClick }) =>
  <Div>
    {icon &&
      <button onClick={onClick}>
        <img src={icon} alt="placeholder" />
      </button>
    }
    <h1>{text}</h1>
  </Div>;

PageTitleBar.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default PageTitleBar;

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  h1 {
    font-size: 1.4em;
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
    left: 0;
    width: 10%;
    height: 50%;
    text-align: center;
    border-width: 0;
    border-right: 1px solid #ddd;
    background-color: transparent;
    img {
      height: 1em;
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
